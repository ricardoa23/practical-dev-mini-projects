# practical-dev-mini-projects

A training monorepo for practical junior software engineer repetition.

Each weekly project is intentionally small enough to finish in about one week, but realistic enough to feel like day-to-day engineering work: reading unfamiliar code, fixing bugs, shipping features, updating tests, querying databases, improving documentation, and refactoring messy code.

## How Weekly Projects Work
- Each folder in `projects/` is a self-contained weekly challenge.
- Projects are intentionally incomplete. You are expected to finish missing implementation, create some files manually, and repair failing tests.
- Most projects include intentional bugs, TODO comments, partial implementations, seed data, and at least one realistic refactor opportunity.
- Treat older projects as legacy code once you move on. Revisit them later with fresh eyes.

## What You Will Practice
- Reading existing code before changing it
- Debugging through tests and failing behavior
- CRUD and database-backed APIs
- Search, filtering, sorting, pagination, joins, and indexing
- Frontend forms, validation, and error handling
- Authentication basics and logging basics
- Refactoring duplicated or poorly named code
- Writing and updating tests
- Working in commit-sized increments

## Repository Layout
- `projects/`: weekly mini-projects
- `scripts/`: helper scripts, including progress tracking
- `templates/`: starter templates for future weeks
- `docs/`: supporting docs and roadmap notes
- `progress.config.json`: default scoring behavior for progress tracking

## How To Start A Project
1. Pick a week in `projects/`.
2. Read that project's `README.md`.
3. Read `TODO.md` and `challenge.json`.
4. Run the project's setup and test commands.
5. Start with the highest-signal failing test or the smallest bug ticket.
6. Update progress with `progress.json` as you complete tasks.

## How To Run Tests
This repo contains multiple stacks, so tests run inside the project you are working on.

Typical commands are documented in each project's `README.md` and `challenge.json`.

Examples:
- TypeScript/JavaScript projects: `npm test` or `npm run test:e2e`
- Java projects: `./mvnw test` or `mvn test`
- Python projects: `pytest`

## Progress Tracking
Progress is calculated from four sources:
- completed required tasks from `progress.json`
- passing test commands defined in `challenge.json`
- completed optional stretch goals from `progress.json`
- required files that the user must create

Run the tracker from the repo root:

```bash
python3 scripts/progress_tracker.py
```

JSON output:

```bash
python3 scripts/progress_tracker.py --json
```

The tracker reads each project's `challenge.json` and optional `progress.json`. If tests are not runnable yet because dependencies are missing, test weight stays incomplete.

## Legacy-Code Revisit Mode
Older projects become more useful after time away from them.

Ways to revisit:
- improve an old README after forgetting the context
- add tests to code you once wrote quickly
- refactor duplicate logic without changing behavior
- add an index or migration after real query pain shows up
- compare your newer solution against your earlier one

## Recommended Workflow
- Work in small commits
- Keep notes in the project `TODO.md`
- Prefer finishing one required ticket before starting three more
- Update tests when behavior changes intentionally
- Use stretch goals only after the core workflow is stable

## Starting Point
Start with Week 01:
- `projects/week-01-recipe-search-dashboard`
- get the API tests running
- fix the broken tag filter
- add the missing validation
- wire the frontend to show paginated search results
