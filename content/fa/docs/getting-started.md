---
title: "شروع سریع"
description: "اولین اپلیکیشن خود را در چند دقیقه روی PaaS2 مستقر کنید."
icon: rocket_launch
weight: 1
---

## پیش‌نیازها

- حساب کاربری در پنل PaaS2
- نصب CLI با دستور `go install` یا باینری رسمی
- یک مخزن Git با Dockerfile یا Buildpack پشتیبانی‌شده

## مراحل

1. وارد [پنل کاربری](https://user-panel-p2.devmad.ir) شوید.
2. یک اپلیکیشن جدید بسازید:

```bash
paas2 apps create my-app
```

3. ریموت را اضافه کنید و پوش کنید:

```bash
git remote add paas2 <remote-url>
git push paas2 main
```

4. وضعیت استقرار را ببینید:

```bash
paas2 apps logs my-app --follow
```

پلتفرم کانتینر را می‌سازد، روی Kubernetes رول‌اوت می‌کند و سلامت را با موتور هوش مصنوعی بررسی می‌کند.
