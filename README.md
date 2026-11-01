# Ziek Melder

Ziek Melder is a small React prototype for a Dutch sick-leave reporting flow. You can switch the interface language, fill in a sample report, and view a confirmation screen. The app also includes demo views for employees, companies, and administrators.

## Current state

This repository contains a front-end demo. Submissions stay in the browser's React state; they are not sent to an employer or saved to a database. Dashboard examples come from `mockData.ts`. Authentication, email or WhatsApp delivery, and HR integrations are not connected.

Please use fictional details only. The demo is not suitable for real employee or health information.

## Run locally

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Vite prints the local address in the terminal.

## Built with

React, TypeScript, and Vite. Interface text is kept in `constants.ts`, and the demo data is in `mockData.ts`.

## Ownership and permissions

Original material owned by Breno Diogo Ramos de Souza is proprietary, with all rights reserved. See [LICENSE](LICENSE). Third-party components retain their own licenses; prior license grants are not revoked.
