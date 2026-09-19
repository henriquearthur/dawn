# Decision 0001: Dawn is token-only

## Status

Accepted.

## Context

Horizon had a coherent visual language built around shadcn-compatible CSS variables, Tailwind 4 mappings, light and dark modes, accent choices, typography, radius, shadows, and animation.

The goal is to preserve that visual language in a public repository called Dawn. The goal is not to publish Horizon's UI components or make Horizon consume Dawn now.

## Decision

Dawn stores its source in DTCG-compatible JSON and generates versioned CSS source files locally.

It has these boundaries:

- no React or shadcn components;
- no showcase or component preview;
- no npm package, CI, CD, or `dist/` directory;
- no global theme selector or unprefixed CSS variables;
- a `data-dawn` root, light as the default mode, and an explicit `data-dawn-theme="dark"` option;
- a named `indigo` default accent alongside seven other accents;
- opt-in extensions for product-adjacent token groups.

The repository is public under MIT. Releases are manual semantic Git tags after local validation.

## Consequences

A product can copy Dawn's JSON or CSS without inheriting a UI library. It must provide its own components, resets, and integration code.

The initial migration preserves Horizon values. It does not preserve Horizon's global CSS, Tailwind utility names, or component behavior. Those are application concerns, not token contracts.
