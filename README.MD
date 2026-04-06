# Express + SQLite + JWT API

Quick start:

1. Install dependencies

```bash
npm install
```

2. Copy `.env.example` to `.env` and set `JWT_SECRET`

3. Start the server

```bash
npm run dev
```

Endpoints:

- `POST /auth/register` — body: `{ username, email, password }`
- `POST /auth/login` — body: `{ email, password }` returns `{ token }`
- `GET /users` — protected, send `Authorization: Bearer <token>`
- `GET /users/me` — protected, returns your user

The SQLite DB file is `database.sqlite` created in the project root on first run.
Chat Participants & Slash Commands
Power-user shortcuts for faster workflows

@ Chat ParticipantsSpecialized Al assistants:
@workspace "Find all API endpoints"
@terminal "What command runs tests?"
@vscode "Set up debugging for Node"

/ Slash Commands
Quick actions:
/doc Generate documentation
/explain Detailed code explanation
/fix Fix errors in selection
/tests Generate unit tests
/new Create project structure

• These shortcuts tell Copilot exactly what kind of help you need

Customize Copilot for Your Project
Create • .github/copilot-instructions.md

# Copilot Instructions

## Code Style

﻿﻿Use React functional components with hooks
﻿﻿Prefer TypeScript over JavaScript
﻿﻿Use Tailwind CSS for styling

## Testing

﻿﻿Write tests with React Testing Library
﻿﻿Use descriptive test names

## Naming Conventions

﻿﻿Components: PascalCase (UserProfile.tsx)
﻿﻿Hooks: camelCase with 'use' (useUserData.ts)
