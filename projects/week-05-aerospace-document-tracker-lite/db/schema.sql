CREATE TABLE tracked_documents (
  id SERIAL PRIMARY KEY,
  project_code TEXT NOT NULL,
  customer TEXT NOT NULL,
  title TEXT NOT NULL,
  status TEXT NOT NULL,
  last_updated_note TEXT,
  assigned_user TEXT,
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_docs_project_customer_status ON tracked_documents (project_code, customer, status);
CREATE INDEX idx_docs_status_updated_at ON tracked_documents (status, updated_at DESC);
