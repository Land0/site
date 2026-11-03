# Null Grid

A responsive server-status directory built with React, Vite, TypeScript, and Tailwind CSS.

## Local development

Requirements:

- Node.js 22
- pnpm 10.34.3

```bash
pnpm install
pnpm dev
```

## Available commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Vite development server |
| `pnpm build` | Create a production build in `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm format` | Format the source files |

## Customize the server tiles

Server names, statuses, addresses, and redirect URLs are stored in the `servers` array in `src/App.tsx`.

Each server supports one of these statuses:

- `online`
- `degraded`
- `offline`

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` builds and deploys the site whenever a commit is pushed to `main`. It also supports manual runs from the Actions tab.

1. Create a GitHub repository and push this project to its `main` branch.
2. Open the repository’s **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open **Actions** and confirm the **Deploy to GitHub Pages** workflow succeeds.

The workflow uses relative asset paths, so it works for both `username.github.io` repositories and project sites such as `username.github.io/repository-name/`.

## Project structure

```text
.
├── .github/workflows/deploy-pages.yml
├── public/
│   └── favicon.svg
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── vite.config.ts
```
