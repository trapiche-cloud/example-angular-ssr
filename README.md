# example-angular-ssr

A counter app built with [Angular](https://angular.dev/) + `@angular/ssr`, ready to deploy on [Trapiche](https://trapiche.cloud).

## Deploy on Trapiche

1. Push this repo to your GitHub account
2. Go to [trapiche.cloud](https://trapiche.cloud) and create a new deployment
3. Select this repository — Trapiche detects Angular SSR automatically
4. Done. Runs in a Docker container managed by Trapiche.

## Detection

Trapiche detects this as an **Angular SSR** app via `"@angular/ssr"` in `package.json`.
- Deploy mode: **SSR / Docker**
- Build command: `npm run build` → `ng build`
- Start command: `npm start` → `node dist/example-angular-ssr/server/server.mjs`

## Local development

```bash
npm install
npm run build
npm start
# open http://localhost:3000
```
