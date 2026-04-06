---
name: copilot-instructions
description: "Workspace instructions for Copilot: help with API endpoints, auth, tests, and server scripts. Use when modifying routes, middleware, or tests."
applyTo:
  - "**/*.js"
  - "routes/**"
  - "middleware/**"
  - "**/*test*.js"
---

# Copilot Workspace Instructions — Express + SQLite + JWT API

Purpose

- Provide concise, high-signal guidance for common tasks in this repository: auth, routes, middleware, and tests.

How to use

- Invoke Copilot with targeted requests, e.g. "Find all API endpoints", "Add JWT validation to route", or "Write tests for /auth/login".

Build & Run

- Install dependencies: `npm install`
- Run in development (auto-reload): `npm run dev`
- Start production: `npm run start`

Testing

- Project uses plain Node.js test files (look for files named `*.test.js` and `User.test.js`). When asked to generate tests, prefer Jest-like style but match existing test structure.

Conventions

- JavaScript (CommonJS); core entry is `index.js`.
- Routes live in `routes/`; middleware in `middleware/`.
- Use `Authorization: Bearer <token>` header for protected endpoints.

Links

- Project README: ../README.MD

Example prompts

- "List all endpoints and required request bodies"
- "Add error handling to POST /auth/register"
- "Generate unit tests for GET /users/me"

When not to load

- Avoid loading for frontend UI or unrelated file types (this instruction targets backend JS files and tests).
