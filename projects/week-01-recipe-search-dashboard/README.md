# Week 01: Recipe Search Dashboard

## Scenario
A product manager wants a simple internal dashboard for searching recipes by name, tag, and prep time. A previous engineer left a mostly working starter app, but search behavior is inconsistent and some validation is missing.

## Business Context
The fictional company runs cooking workshops and needs staff to quickly find recipes that fit time constraints and dietary tags.

## Tech Stack
- TypeScript
- React
- Node + Express
- PostgreSQL
- Vitest
- Playwright placeholder for later UI checks

## Setup
### Backend
```bash
cd backend
npm install
npm run dev
```

API runs at `http://localhost:4001`.

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Vite runs at its default local port and currently uses mocked fetch behavior until you wire it to the backend.

## Database Setup
Use the SQL files in `db/`.

```bash
createdb recipe_dashboard
psql recipe_dashboard < db/schema.sql
psql recipe_dashboard < db/seed.sql
```

Set environment variables:
- `DATABASE_URL`
- `PORT`

## Tests
- `cd backend && npm test`
- `cd frontend && npm test`
- `npm run test:e2e` later if you add browser coverage

Note: the backend intentionally includes failing tests for exercise bugs. The frontend test should pass once dependencies are installed.

## Task List
- Fix tag filtering in the API
- Add request validation for pagination inputs
- Ensure sorting by prep time works both directions
- Add at least two integration tests for the recipes endpoint
- Create `backend/.env.example`
- Create `notes/debug-log.md`

## Stretch Goals
- Add a multi-tag filter
- Add a “max prep time” quick filter button in the frontend
- Add a Playwright smoke test for the search screen

## Senior Engineer Notes
### What You Should Learn
- Trace a bug from UI symptoms to service code
- Verify assumptions with tests before changing code
- Keep API validation close to the request boundary

### What Junior Engineers Often Miss
- Pagination bugs hide until you test invalid values
- Search and sorting need predictable defaults
- One green unit test does not prove query behavior end to end

### What To Watch Out For
- Off-by-one page math
- SQL string building that ignores empty filters
- Frontend state that does not reset when filters change

### What Good Completion Looks Like
- Filters behave consistently
- Validation rejects invalid inputs clearly
- Tests cover the core query paths
- README updates reflect any setup changes you made
