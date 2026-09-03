---
title: "CLI reference"
description: "Core CLI commands for deploy, scale, and logs."
icon: terminal
weight: 2
---

## Install

```bash
# example
curl -fsSL https://get.paas2.ir | sh
```

## Common commands

| Command | Purpose |
|---------|---------|
| `paas2 apps list` | List applications |
| `paas2 apps create <name>` | Create an application |
| `paas2 apps scale <name> --replicas N` | Scale replicas |
| `paas2 apps logs <name>` | Tail logs |
| `paas2 apps secrets set KEY=VALUE` | Set a secret |

## Authentication

```bash
paas2 auth login
```

The CLI uses OIDC/PKCE with Keycloak and stores the token securely.
