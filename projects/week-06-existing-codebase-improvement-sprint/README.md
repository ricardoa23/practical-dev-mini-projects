# Week 06: Existing Codebase Improvement Sprint

## Scenario
This week simulates a maintenance sprint. Instead of a clean new app, you revisit older work and ship a focused set of improvements across an existing codebase.

## Business Context
The team wants one small feature, one refactor, more tests, better docs, and one database optimization before the next release window.

## Tech Stack
- Mixed stack
- Revisit one prior project from this repo
- Suggested targets: Week 01, Week 03, or Week 04

## Setup
Pick one prior project and work in that directory. This week folder contains planning, migration ideas, and sprint-specific tests/checklists.

## Task List
- Choose one prior week as the sprint target
- Add one user-facing feature
- Refactor one pain point without a rewrite
- Add missing tests around the changed area
- Improve the README for the target project
- Add one migration or index improvement
- Create `SPRINT-RETRO.md`

## Suggested Targets
- Week 01: add multi-tag search and a database index review
- Week 03: add pagination metadata and better assignment logging
- Week 04: remove duplicate total calculations and improve validation messaging

## Test Commands
Run the original project's tests plus any new tests you add.

## Senior Engineer Notes
### What You Should Learn
- Maintenance work is usually a bundle of small improvements, not a greenfield rewrite
- Good engineers improve both code and documentation
- Tiny database changes can remove recurring pain when query patterns are obvious

### What Junior Engineers Often Miss
- A feature request can expose old technical debt
- README improvements are real engineering work when they reduce onboarding cost
- Adding one focused index can be more valuable than adding three new endpoints

### What To Watch Out For
- Scope creep into a rewrite
- Changing behavior without updating tests
- Adding migrations without explaining why

### What Good Completion Looks Like
- One old project clearly improves in usability, maintainability, and test coverage
- The changes are small enough to explain in a pull request
