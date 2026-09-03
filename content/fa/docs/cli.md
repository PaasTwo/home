---
title: "مرجع CLI"
description: "دستورات اصلی CLI برای استقرار، مقیاس و لاگ."
icon: terminal
weight: 2
---

## نصب

```bash
# نمونه
curl -fsSL https://get.paas2.ir | sh
```

## دستورات پرکاربرد

| دستور | کاربرد |
|-------|--------|
| `paas2 apps list` | فهرست اپلیکیشن‌ها |
| `paas2 apps create <name>` | ساخت اپلیکیشن |
| `paas2 apps scale <name> --replicas N` | مقیاس‌دهی |
| `paas2 apps logs <name>` | مشاهده لاگ |
| `paas2 apps secrets set KEY=VALUE` | تنظیم secret |

## احراز هویت

```bash
paas2 auth login
```

CLI از OIDC/PKCE با Keycloak استفاده می‌کند و توکن را به‌صورت امن ذخیره می‌کند.
