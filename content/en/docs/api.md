---
title: "API overview"
description: "The central PaaS2 REST API with live Swagger docs."
icon: api
weight: 3
---

## Foundation

All panels and the CLI talk to the platform through the **API Server** (Go + Gin). Authentication is Keycloak (OIDC).

## Interactive docs

See the live Swagger UI:

[Swagger API](https://api.devmad.ir/swagger/index.html)

## Core resources

- **Apps** — application lifecycle and deploys
- **Environments** — staging / production
- **Secrets** — confidential configuration
- **Billing** — quotas and invoices
- **Tickets** — support

Use Swagger for schemas and request examples.
