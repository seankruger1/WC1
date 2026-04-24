# WC Scenarios Explorer Static Build

This version is a dependency-free static site for Vercel.

## Why this version exists

The previous builds failed during dependency installation before the application code was compiled. This static version avoids `npm install`, `pnpm install`, and package-manager detection entirely by removing `package.json` and shipping plain HTML, CSS, and JavaScript.

## Upload instructions

1. Delete the old contents of the GitHub repository.
2. Upload the contents of this folder to the repository root.
3. Confirm that there is no `package.json`, `package-lock.json`, `pnpm-lock.yaml`, or `yarn.lock` in the repo.
4. Redeploy on Vercel.

## Important root files

- `index.html`
- `assets/styles.css`
- `assets/app.js`
- `scenarios/index.html`
- `interventions/index.html`
- `skills/index.html`
- `vercel.json`

Vercel should deploy this as a static site without installing dependencies.
