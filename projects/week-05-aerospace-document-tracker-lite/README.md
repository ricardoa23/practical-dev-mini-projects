# Week 05: Aerospace Document Tracker Lite

## Scenario
A small aerospace supplier needs a document tracker for certification documents. Status transitions are partially implemented, but invalid transitions slip through and search is inconsistent.

## Business Context
Teams track design, review, approval, and release steps for customer-facing documents. Incorrect status changes can cause compliance headaches.

## Tech Stack
- Java
- Spring Boot backend
- React frontend
- PostgreSQL
- JUnit 5
- Vitest

## Setup
### Backend
```bash
cd backend
mvn test
```

### Frontend
```bash
cd frontend
npm install
npm test
```

## Database Instructions
```bash
createdb aerospace_docs
psql aerospace_docs < db/schema.sql
psql aerospace_docs < db/seed.sql
```

## Test Commands
- `cd backend && mvn test`
- `cd frontend && npm test`

## Task List
- Implement valid status transition rules
- Fix bug that allows invalid transitions
- Add integration tests for workflow changes
- Improve search by project/customer/status
- Create `backend/src/main/resources/application-local.properties`
- Create `notes/workflow-decisions.md`

## Stretch Goals
- Add audit log entries for transitions
- Add a frontend document history panel

## Senior Engineer Notes
### What You Should Learn
- Encode business rules clearly in service code
- Test state transitions instead of only happy-path CRUD
- Keep frontend and backend status vocabulary aligned

### What Junior Engineers Often Miss
- Workflow bugs often look like tiny conditionals but have bigger business consequences
- Search endpoints should agree on naming and filter defaults

### What To Watch Out For
- Invalid transitions allowed by permissive service methods
- Frontend forms sending statuses the backend does not expect

### What Good Completion Looks Like
- Illegal transitions fail predictably
- Search is testable and documented
- Notes explain why you chose specific workflow rules
