---
title: "Getting started"
description: "Deploy your first application on PaaS2 in minutes."
icon: rocket_launch
weight: 1
---

## Prerequisites

- A PaaS2 user-panel account
- The CLI installed via `go install` or the official binary
- A Git repository with a Dockerfile or a supported buildpack

## Steps

1. Sign in to the [user panel](https://user-panel-p2.devmad.ir).
2. Create an application:

```bash
paas2 apps create my-app
```

3. Add the remote and push:

```bash
git remote add paas2 <remote-url>
git push paas2 main
```

4. Watch the deploy:

```bash
paas2 apps logs my-app --follow
```

The platform builds the container, rolls it out on Kubernetes, and validates health with the AI engine.
