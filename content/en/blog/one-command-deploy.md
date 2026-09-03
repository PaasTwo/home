---
title: "One-command deploys"
date: 2026-08-28
description: "How the CLI and GitOps work together."
author: "PaaS2 team"
---

With PaaS2 you can use either path:

1. **Git push** to the platform remote
2. **CLI** for create, scale, and logs

Both hit the same API Server. After rollout, the AI engine checks health and suggests remediations when needed.

```bash
git push paas2 main
paas2 apps logs my-app --follow
```
