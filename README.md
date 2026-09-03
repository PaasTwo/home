# PaaS2 Home

Public bilingual landing site for PaaS2, built with Hugo and the Obsidian Flux theme (English LTR, Farsi RTL).

Farsi is the default language at `/`. English lives at `/en/`.

## Design

Visual system from `newhome_stitch/` (Obsidian Flux): void background, purple-to-cyan accents, glass cards, Geist/Inter for English and Vazirmatn for Farsi.

## Local development

```bash
npm install
npm run build:css
hugo server
```

Or `task serve`. Open http://localhost:1313 — Farsi homepage, English at `/en/`.

## Build

```bash
npm install
task build
```

Output is `public/`.

## Deploy

Nginx serves the Hugo output on port 6180, routed by Traefik:

```yaml
Host(`p2.devmad.ir`)  →  home:6180
```

```bash
docker compose up -d --build
```

The container is included in the root `task up` via the `home` service.
