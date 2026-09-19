# Token architecture

Dawn preserves Horizon's visual decisions without turning Horizon's component API into a public API.

## Core

The core contains decisions that make sense without knowing a product:

- semantic surface, text, action, border, focus, and danger colors;
- light and dark modes;
- the eight accent choices;
- font stacks, tracking, radius, elevation, and generic motion.

The core emits `css/dawn.css`. It is scoped to `:where([data-dawn])`, which makes its selector intentionally easy for a host application to override.

## Extensions

Extensions carry useful decisions that are not universal:

- `navigation` contains sidebar and navigation colors;
- `data-visualization` contains chart-series colors;
- `workflow` contains status, priority, and tint values;
- `panel` contains the side-panel shadow and entrance motion.

An extension is never imported by the core. A consumer adds it explicitly after `dawn.css`.

## Source and generated files

Files under `tokens/` are the canonical source. They follow the [DTCG format module](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/) with `$value`, `$type`, and `$description`.

CSS needs a small amount of metadata that DTCG does not define, such as a CSS selector, an output path, or the dynamic accent-hue expression. That metadata lives under the reverse-domain extension key `com.henriquearthur.dawn`. The DTCG value remains present and meaningful without the extension.

`pnpm build` regenerates the tracked CSS and the token catalog. There is no `dist/`, package publishing, CI, or CD.

## Naming

DTCG names describe intent, for example `color.surface.canvas`. Generated CSS adds the `--dawn-` prefix, producing `--dawn-color-surface-canvas`.

This gives consumers two stable handles:

- token source names for tooling and documentation;
- prefixed CSS variables for web applications.

The old shadcn-compatible variable names are deliberately not exported. No Horizon component is copied into Dawn.
