# TODO

## Required Tasks
- [ ] Fix the broken tag filter in the backend recipes query
- [ ] Validate `page` and `pageSize` query params
- [ ] Make descending prep time sort behave correctly
- [ ] Add two backend tests for filtering and pagination metadata
- [ ] Create `notes/debug-log.md`
- [ ] Create `backend/.env.example`

## Bug Tickets
- [ ] Recipes with no matching tag still appear in some responses
- [ ] Page 0 does not fail fast
- [ ] Sorting by `prepTimeMinutes` ignores `desc`

## Refactor Tickets
- [ ] Move pagination parsing out of the route handler
- [ ] Replace duplicated filter-normalization logic in frontend state handling

## Testing Tasks
- [ ] Update tests to cover invalid query values
- [ ] Add a frontend test for loading empty-state results

## User-Created Files
- [ ] `notes/debug-log.md`
- [ ] `backend/.env.example`
