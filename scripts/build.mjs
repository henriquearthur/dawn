import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { relative, resolve } from 'node:path'
import process from 'node:process'

const root = resolve(import.meta.dirname, '..')
const tokensDirectory = resolve(root, 'tokens')
const vendorKey = 'com.henriquearthur.dawn'
const checkOnly = process.argv.includes('--check')
const tick = String.fromCharCode(96)

const supportedTypes = new Set([
  'color',
  'cubicBezier',
  'dimension',
  'duration',
  'fontFamily',
  'number',
  'shadow',
])

const sources = []
for (const file of await listTokenFiles(tokensDirectory)) {
  const parsed = JSON.parse(await readFile(file, 'utf8'))
  const css = parsed.$extensions?.[vendorKey]?.css

  if (!css?.output || !css.selector) {
    throw new Error(displayPath(file) + ' must declare CSS output and selector metadata.')
  }
  if (css.output.startsWith('dist/')) {
    throw new Error(displayPath(file) + ' must not write to dist/.')
  }

  sources.push({
    css,
    file,
    name: displayPath(file),
    tokens: flattenTokens(parsed, [], undefined),
  })
}

validateSources(sources)

const outputs = new Map()
for (const source of sources) {
  const group = outputs.get(source.css.output) ?? []
  group.push(source)
  outputs.set(source.css.output, group)
}

for (const [output, outputSources] of outputs) {
  await writeGenerated(output, renderCss(outputSources))
}

await writeGenerated('css/tailwind-theme.css', renderTailwindTheme(sources))
await writeGenerated('docs/reference/token-catalog.md', renderCatalog(sources))

console.log(
  (checkOnly ? 'Validated ' : 'Generated CSS and catalog from ') +
    sources.length +
    ' token sources.'
)

async function listTokenFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries.sort((left, right) => left.name.localeCompare(right.name))) {
    const fullPath = resolve(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await listTokenFiles(fullPath)))
    } else if (entry.isFile() && entry.name.endsWith('.tokens.json')) {
      files.push(fullPath)
    }
  }

  return files
}

function flattenTokens(node, path, inheritedType) {
  if (!node || typeof node !== 'object' || Array.isArray(node)) {
    return []
  }

  const type = node.$type ?? inheritedType
  if (Object.hasOwn(node, '$value')) {
    return [{ node, path, type }]
  }

  return Object.entries(node)
    .filter(([key]) => !key.startsWith('$'))
    .flatMap(([key, value]) => flattenTokens(value, [...path, key], type))
}

function validateSources(allSources) {
  const cssVariables = new Set()
  const selectorVariables = new Set()

  for (const source of allSources) {
    for (const token of source.tokens) {
      const identifier = source.css.output + '|' + source.css.selector + '|' + cssName(token)
      if (selectorVariables.has(identifier)) {
        throw new Error('Duplicate CSS variable ' + cssName(token) + ' in ' + source.name + '.')
      }
      selectorVariables.add(identifier)
      cssVariables.add(cssName(token))
      validateToken(token, source.name)
    }
  }

  for (const source of allSources) {
    for (const token of source.tokens) {
      const reference = tokenReference(token.node.$value)
      if (reference && !cssVariables.has(referenceToCssName(reference))) {
        throw new Error(source.name + ' references missing token ' + reference + '.')
      }
    }
  }
}

function validateToken(token, sourceName) {
  const label = sourceName + '#' + token.path.join('.')
  if (!token.type || !supportedTypes.has(token.type)) {
    throw new Error(label + ' has an unsupported or missing $type.')
  }

  const value = token.node.$value
  if (tokenReference(value)) {
    return
  }

  if (token.type === 'color') {
    validateColor(value, label)
  } else if (token.type === 'fontFamily') {
    const isFamily = typeof value === 'string' || (Array.isArray(value) && value.every((font) => typeof font === 'string'))
    if (!isFamily) {
      throw new Error(label + ' must be a font family string or array.')
    }
  } else if (token.type === 'number') {
    if (typeof value !== 'number') {
      throw new Error(label + ' must be a JSON number.')
    }
  } else if (token.type === 'dimension') {
    validateUnitValue(value, new Set(['px', 'rem']), label)
  } else if (token.type === 'duration') {
    validateUnitValue(value, new Set(['ms', 's']), label)
  } else if (token.type === 'cubicBezier') {
    if (!Array.isArray(value) || value.length !== 4 || !value.every((part) => typeof part === 'number')) {
      throw new Error(label + ' must be four numeric cubic-bezier values.')
    }
  } else if (token.type === 'shadow') {
    const layers = Array.isArray(value) ? value : [value]
    if (!layers.length) {
      throw new Error(label + ' must contain at least one shadow layer.')
    }
    for (const layer of layers) {
      validateColor(layer?.color, label)
      validateUnitValue(layer?.offsetX, new Set(['px', 'rem']), label)
      validateUnitValue(layer?.offsetY, new Set(['px', 'rem']), label)
      validateUnitValue(layer?.blur, new Set(['px', 'rem']), label)
      validateUnitValue(layer?.spread, new Set(['px', 'rem']), label)
    }
  }
}

function validateColor(value, label) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(label + ' must be a DTCG color object.')
  }
  if (!['oklch', 'hsl'].includes(value.colorSpace)) {
    throw new Error(label + ' uses unsupported color space ' + value.colorSpace + '.')
  }
  if (!Array.isArray(value.components) || value.components.length !== 3 || !value.components.every((part) => typeof part === 'number')) {
    throw new Error(label + ' must have three numeric color components.')
  }
  if (value.alpha !== undefined && typeof value.alpha !== 'number') {
    throw new Error(label + ' alpha must be numeric.')
  }
}

function validateUnitValue(value, units, label) {
  if (!value || typeof value.value !== 'number' || !units.has(value.unit)) {
    throw new Error(label + ' has an invalid unit value.')
  }
}

function renderCss(outputSources) {
  const ordered = [...outputSources].sort((left, right) => {
    const order = (left.css.order ?? 0) - (right.css.order ?? 0)
    return order || left.name.localeCompare(right.name)
  })
  const lines = [
    '/*',
    ' * Generated from DTCG token sources. Do not edit by hand.',
    ' * Run pnpm build after changing tokens/.',
    ' */',
    '',
  ]

  for (const source of ordered) {
    lines.push('/* Source: ' + source.name + ' */')
    lines.push(source.css.selector + ' {')
    for (const token of [...source.tokens].sort((left, right) => cssName(left).localeCompare(cssName(right)))) {
      lines.push('  ' + cssName(token) + ': ' + cssValue(token) + ';')
    }
    lines.push('}', '')
  }

  for (const source of ordered) {
    for (const keyframe of source.css.keyframes ?? []) {
      lines.push('@keyframes ' + keyframe.name + ' {')
      for (const [step, declarations] of Object.entries(keyframe.frames)) {
        lines.push('  ' + step + ' {')
        for (const [property, value] of Object.entries(declarations)) {
          lines.push('    ' + property + ': ' + value + ';')
        }
        lines.push('  }')
      }
      lines.push('}', '')
    }
  }

  if (ordered.some((source) => source.css.reducedMotion)) {
    lines.push('@media (prefers-reduced-motion: reduce) {')
    lines.push('  :where([data-dawn]) *,')
    lines.push('  :where([data-dawn]) *::before,')
    lines.push('  :where([data-dawn]) *::after {')
    lines.push('    animation-duration: 0.01ms !important;')
    lines.push('    animation-iteration-count: 1 !important;')
    lines.push('    transition-duration: 0.01ms !important;')
    lines.push('  }')
    lines.push('}', '')
  }

  return lines.join('\n') + '\n'
}

function renderTailwindTheme(allSources) {
  const tokenByVariable = new Map()
  for (const source of allSources.filter((source) => source.css.output === 'css/dawn.css')) {
    for (const token of source.tokens) {
      tokenByVariable.set(cssName(token), token)
    }
  }

  const mappings = [...tokenByVariable.entries()]
    .map(([variable, token]) => tailwindMapping(variable, token.type))
    .filter(Boolean)
    .sort((left, right) => left.localeCompare(right))

  return [
    '/*',
    ' * Generated from DTCG token sources. Import after Tailwind CSS.',
    ' * Dawn remains scoped to [data-dawn].',
    ' */',
    '',
    "@custom-variant dawn-dark (&:where([data-dawn][data-dawn-theme='dark'], [data-dawn][data-dawn-theme='dark'] *));",
    '',
    '@theme inline {',
    ...mappings.map((mapping) => '  ' + mapping),
    '}',
    '',
  ].join('\n')
}

function tailwindMapping(variable, type) {
  if (type === 'color' && variable.startsWith('--dawn-color-')) {
    return '--color-dawn-' + variable.slice('--dawn-color-'.length) + ': var(' + variable + ');'
  }
  if (type === 'fontFamily' && variable.startsWith('--dawn-font-')) {
    return '--font-dawn-' + variable.slice('--dawn-font-'.length) + ': var(' + variable + ');'
  }
  if (type === 'shadow' && variable.startsWith('--dawn-elevation-')) {
    return '--shadow-dawn-' + variable.slice('--dawn-elevation-'.length) + ': var(' + variable + ');'
  }
  if (type === 'dimension' && variable.startsWith('--dawn-radius-')) {
    return '--radius-dawn-' + variable.slice('--dawn-radius-'.length) + ': var(' + variable + ');'
  }
  if (type === 'number' && variable.startsWith('--dawn-tracking-')) {
    return '--tracking-dawn-' + variable.slice('--dawn-tracking-'.length) + ': var(' + variable + ');'
  }
  return undefined
}

function renderCatalog(allSources) {
  const groups = new Map([
    ['Core', allSources.filter((source) => source.css.output === 'css/dawn.css')],
    ['Extensions', allSources.filter((source) => source.css.output !== 'css/dawn.css')],
  ])
  const lines = [
    '# Token catalog',
    '',
    '> Generated from tokens/**/*.tokens.json. Run pnpm build after editing token sources.',
    '',
    'Dawn uses :where([data-dawn]) as its root. A value using var(...) is an intentional token alias.',
    '',
  ]

  for (const [title, sourcesForGroup] of groups) {
    if (!sourcesForGroup.length) {
      continue
    }
    lines.push('## ' + title, '')
    for (const source of [...sourcesForGroup].sort((left, right) => left.name.localeCompare(right.name))) {
      lines.push('### ' + tick + source.name + tick, '')
      lines.push('| Token | CSS custom property | Type | Value | Description |')
      lines.push('| --- | --- | --- | --- | --- |')
      for (const token of [...source.tokens].sort((left, right) => tokenName(left).localeCompare(tokenName(right)))) {
        const row = [
          tick + tokenName(token) + tick,
          tick + cssName(token) + tick,
          tick + token.type + tick,
          tick + markdownEscape(cssValue(token)) + tick,
          markdownEscape(token.node.$description ?? ''),
        ]
        lines.push('| ' + row.join(' | ') + ' |')
      }
      lines.push('')
    }
  }

  return lines.join('\n') + '\n'
}

function cssName(token) {
  return token.node.$extensions?.[vendorKey]?.css?.name ?? '--dawn-' + token.path.map(kebabCase).join('-')
}

function referenceToCssName(reference) {
  return '--dawn-' + reference.slice(1, -1).split('.').map(kebabCase).join('-')
}

function cssValue(token) {
  const override = token.node.$extensions?.[vendorKey]?.css?.value
  if (override) {
    return override
  }

  const value = token.node.$value
  const reference = tokenReference(value)
  if (reference) {
    return 'var(' + referenceToCssName(reference) + ')'
  }

  if (token.type === 'color') {
    return colorToCss(value)
  }
  if (token.type === 'fontFamily') {
    return (Array.isArray(value) ? value : [value]).map(cssFontName).join(', ')
  }
  if (token.type === 'number') {
    return String(value)
  }
  if (token.type === 'dimension' || token.type === 'duration') {
    return String(value.value) + value.unit
  }
  if (token.type === 'cubicBezier') {
    return 'cubic-bezier(' + value.join(', ') + ')'
  }
  if (token.type === 'shadow') {
    return (Array.isArray(value) ? value : [value]).map(shadowToCss).join(', ')
  }

  throw new Error('Cannot emit ' + token.type + ' token ' + tokenName(token) + '.')
}

function colorToCss(value) {
  const [first, second, third] = value.components
  const alpha = value.alpha === undefined || value.alpha === 1 ? '' : ' / ' + value.alpha
  if (value.colorSpace === 'oklch') {
    return 'oklch(' + first + ' ' + second + ' ' + third + alpha + ')'
  }
  if (value.colorSpace === 'hsl') {
    return 'hsl(' + first + ' ' + second * 100 + '% ' + third * 100 + '%' + alpha + ')'
  }
  throw new Error('Cannot emit color space ' + value.colorSpace + '.')
}

function shadowToCss(layer) {
  return [
    unitToCss(layer.offsetX),
    unitToCss(layer.offsetY),
    unitToCss(layer.blur),
    unitToCss(layer.spread),
    colorToCss(layer.color),
  ].join(' ')
}

function unitToCss(value) {
  return String(value.value) + value.unit
}

function cssFontName(font) {
  return /\s/.test(font) ? "'" + font + "'" : font
}

function tokenReference(value) {
  return typeof value === 'string' && /^\{[^{}]+\}$/.test(value) ? value : undefined
}

function tokenName(token) {
  return token.path.join('.')
}

function kebabCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
}

function markdownEscape(value) {
  return String(value).replaceAll('|', '\\|')
}

async function writeGenerated(path, content) {
  content = content.replace(/\n+$/, '\n')
  const destination = resolve(root, path)
  let previous
  try {
    previous = await readFile(destination, 'utf8')
  } catch {
    previous = undefined
  }

  if (previous === content) {
    return
  }
  if (checkOnly) {
    throw new Error(path + ' is stale. Run pnpm build.')
  }

  await mkdir(resolve(destination, '..'), { recursive: true })
  await writeFile(destination, content)
}

function displayPath(path) {
  return relative(root, path).replaceAll('\\', '/')
}
