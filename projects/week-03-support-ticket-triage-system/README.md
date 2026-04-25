# Week 03: Support Ticket Triage System

## Scenario
A support team needs a lightweight ticket triage API. The starter app supports basic listing, but filtering is inconsistent and logging is almost nonexistent.

## Business Context
Support leads assign incoming tickets by priority and status. They need searchable queues and enough logging to debug triage issues.

## Tech Stack
- Python 3.12
- FastAPI
- PostgreSQL
- pytest

## Setup
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pytest
```

## Database Instructions
```bash
createdb support_triage
psql support_triage < db/schema.sql
psql support_triage < db/seed.sql
```

Environment variables:
- `DATABASE_URL`
- `LOG_LEVEL`

## Test Commands
- `pytest`

## Task List
- Fix status filtering in the ticket query
- Add endpoint tests for assignment and search
- Improve logging around triage actions
- Create `docs/investigation-notes.md`
- Create `.env.example`

## Stretch Goals
- Add pagination metadata headers
- Add query timing logs

## Senior Engineer Notes
### What You Should Learn
- Build confidence with API tests in Python
- Separate filtering logic from request parsing
- Add enough logging to debug behavior without spamming everything

### What Junior Engineers Often Miss
- Logging without ticket identifiers is almost useless
- Filter bugs often come from truthy checks around optional query params

### What To Watch Out For
- Case sensitivity in status and assignee filters
- API responses that silently ignore invalid input

### What Good Completion Looks Like
- Search and filters match the documented behavior
- Tests describe expected queue behavior clearly
- Logging helps explain state transitions
