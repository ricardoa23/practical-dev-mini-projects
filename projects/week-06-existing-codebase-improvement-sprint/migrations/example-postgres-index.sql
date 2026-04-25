-- Example migration pattern for a follow-up sprint.
-- Copy and adapt this into the target project you choose.
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_example_status_updated
  ON example_table (status, updated_at DESC);
