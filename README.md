# Dawn

Dawn is a token-only design system extracted from Horizon's visual language.
It has no UI components, component preview, npm package, CI, or deployment
pipeline. The repository is the source people copy from and evolve.

The canonical source is DTCG-compatible JSON in [`tokens/`](tokens/). The
tracked CSS in [`css/`](css/) and token catalog in
[`docs/reference/token-catalog.md`](docs/reference/token-catalog.md) are
generated locally from that source.

## Start here

- [Use Dawn tokens](docs/how-to/use-dawn.md) when adding the theme to a web
  project.
- [Token catalog](docs/reference/token-catalog.md) when looking up a token or
  CSS custom property.
- [Token architecture](docs/explanation/token-architecture.md) when deciding
  whether a token belongs in the core or an extension.
- [Decision 0001](docs/decisions/0001-token-only.md) for the scope and
  constraints of the project.
- [Make a manual release](docs/how-to/release.md) when creating a Git tag.

## Local commands

```sh
pnpm build
pnpm check
```

`build` regenerates tracked CSS and the catalog. `check` validates the token
source and fails if generated files are stale. These commands are local only.

## License

[MIT](LICENSE)
