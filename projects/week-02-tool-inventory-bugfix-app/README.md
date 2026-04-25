# Week 02: Tool Inventory Bugfix App

## Scenario
You joined a warehouse tooling team. The application mostly works, but tool availability is wrong after checkout and a few repository methods were never implemented.

## Business Context
Field technicians borrow tools for service appointments. Dispatchers need accurate availability, serial-number search, and clear check-in/check-out behavior.

## Tech Stack
- Java 21
- Spring Boot
- MySQL
- JUnit 5

## Setup
```bash
mvn test
```

## Database Instructions
Use `db/schema.sql` and `db/seed.sql` in a local MySQL database.

Environment variables:
- `DB_URL`
- `DB_USERNAME`
- `DB_PASSWORD`

## Test Commands
- `mvn test`

## Task List
- Fix the availability bug after checkout
- Add missing repository methods for serial number lookup
- Add service tests for check-in and check-out flows
- Create `src/main/resources/application-local.properties`
- Update README notes if you change setup assumptions

## Stretch Goals
- Add low-stock reporting for consumable tools
- Add a due-date warning endpoint

## Senior Engineer Notes
### What You Should Learn
- Service-layer state transitions
- Reading simple domain models without overengineering
- Writing targeted tests around bug reports

### What Junior Engineers Often Miss
- A boolean like `available` can drift away from source-of-truth status fields
- Repository methods need tests too when they encode filtering behavior

### What To Watch Out For
- Partial updates that change one field but not another
- Search normalization for serial numbers with lowercase input

### What Good Completion Looks Like
- The bug is fixed through tests, not by guesswork
- The checkout workflow is consistent in controller, service, and repository behavior
