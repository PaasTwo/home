# PaaS2 Home Page

Static landing page for the PaaS2 platform, served at the root domain.

## Overview

This is the public-facing home page that showcases PaaS2's features and provides navigation to all platform services. Built with Bootstrap 5 and follows the Lumina Velocity design system for a modern, professional developer experience.

## Design System

- **Theme**: Dark mode with "Elite Developer" aesthetic
- **Colors**: Obsidian Navy background with Electric Cyan accents
- **Typography**: Vazirmatn for UI, JetBrains Mono for code
- **Style**: Minimalist Glassmorphism with subtle depth layering
- **Framework**: Bootstrap 5 RTL for responsive layout

## Features

- **Hero Section**: Eye-catching introduction with animated elements
- **Dashboard Preview**: Visual showcase of the platform interface
- **Stats Section**: Key platform metrics and uptime guarantees
- **Feature Grid**: Bento-style layout highlighting core capabilities:
  - Git-based auto-deployment
  - Managed Kubernetes orchestration
  - Full observability (Prometheus, Grafana)
  - Enterprise security (Keycloak SSO)
  - Intelligent autoscaling
  - Multi-region deployment
- **CTA Section**: Clear call-to-action for user onboarding
- **Footer**: Navigation to all platform services and documentation

## Routing

The home page is routed through Traefik at the root domain:

```yaml
Host(`${DOMAIN}`)  →  home:80  →  /usr/share/nginx/html/index.html
```

All subdomains route to their respective services:
- `api.${DOMAIN}` → API Server
- `app.${DOMAIN}` → User Panel
- `admin.${DOMAIN}` → Admin Panel
- `auth.${DOMAIN}` → Keycloak
- `db.${DOMAIN}` → Adminer (PostgreSQL UI)
- `redis.${DOMAIN}` → Redis Commander
- `traefik.${DOMAIN}` → Traefik Dashboard

## Files

- **index.html** - Main landing page with embedded styles
- **screen.png** - Dashboard screenshot (optional, fallback icon if missing)
- **DESIGN.md** - Complete design system specification
- **code.html** - Original Tailwind design reference
- **docker-compose.yml** - Nginx container with Traefik labels

## Deployment

### Local Development

```bash
# Start the home page (requires paas2-network)
cd home
docker compose up -d

# Access at https://localhost (via Traefik)
```

### Production Deployment

The home page is automatically included in the main deployment:

```bash
# Via Taskfile (includes all services)
task up

# Or manually
cd home && docker compose up -d
```

## Configuration

The service uses the root `.env` file for domain configuration:

```bash
DOMAIN=example.com
```

The HTML file uses `${DOMAIN}` placeholders which are substituted at container startup using `envsubst`. This allows dynamic domain configuration without rebuilding the image.

The Traefik labels automatically route `https://${DOMAIN}` to this service.

## Customization

To customize the home page:

1. **Edit index.html** - Update content, sections, or structure
2. **Modify inline styles** - Adjust CSS custom properties in `<style>` block
3. **Replace screenshot** - Add `screen.png` for the dashboard preview
4. **Update links** - Ensure all hrefs use correct subdomain patterns

## Dependencies

- **nginx:alpine** - Lightweight web server (< 25MB)
- **Traefik** - Must be running for HTTPS and routing
- **paas2-network** - Shared Docker network for service communication

## Health Check

The container includes a health check that verifies nginx is responding:

```bash
docker compose ps
# Should show "healthy" status
```

## Notes

- All external links use `${DOMAIN}` variable substitution
- The page is fully responsive (mobile, tablet, desktop)
- RTL support for Persian/Farsi content
- No build step required - pure static HTML
- All assets are CDN-hosted (Bootstrap, Google Fonts, Material Icons)
