# Make a manual release

Dawn has no CI or CD. A release is a local, reviewed Git operation.

1. Change the DTCG source under `tokens/`.
2. Run `pnpm build`.
3. Run `pnpm check`.
4. Inspect the generated CSS, catalog, and Git diff.
5. Update `package.json` only to record the repository's source version.
6. Commit the change and create a semantic Git tag such as `v0.1.0`.
7. Push the commit and tag to GitHub.

The tag is the version consumers should copy or pin. There is no package publication step.
