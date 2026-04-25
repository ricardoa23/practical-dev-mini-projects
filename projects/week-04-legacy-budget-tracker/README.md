# Week 04: Legacy Budget Tracker

## Scenario
A budgeting tool was written quickly by multiple engineers. Totals are wrong for some categories, validation is inconsistent, and duplicated logic exists in both frontend and backend code.

## Business Context
Small teams use this app to track monthly budget items. Finance wants stable totals, clearer validation, and less maintenance pain.

## Tech Stack
- TypeScript
- React
- Node
- MongoDB-style JSON seed data
- Vitest

## Setup
```bash
cd api && npm install && npm test
cd ../web && npm install && npm test
```

## Database Instructions
Mongo seed examples are in `data/seed.budgets.json`.
You can load them into a local MongoDB instance or keep using the in-memory starter data.

## Test Commands
- `cd api && npm test`
- `cd web && npm test`

## Task List
- Fix broken category totals
- Remove one duplicated calculation path
- Add validation for negative budget entries
- Refactor one messy frontend component
- Create `notes/refactor-plan.md`
- Create `api/.env.example`

## Stretch Goals
- Add category sorting by total spend
- Add a small browser test for creating a budget item

## Senior Engineer Notes
### What You Should Learn
- Read code written in inconsistent styles without rewriting everything
- Refactor only after tests protect behavior
- Spot duplicated business logic across layers

### What Junior Engineers Often Miss
- Copy-pasted calculations drift over time
- Naming problems slow debugging more than people expect
- Rewrites are seductive but risky

### What To Watch Out For
- Totals being calculated differently in different files
- Validation existing in the frontend but not the backend

### What Good Completion Looks Like
- Totals are consistent
- At least one duplicate path is removed safely
- Tests lock in the fixed behavior
