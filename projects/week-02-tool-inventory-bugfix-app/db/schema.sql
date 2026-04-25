CREATE TABLE tool_items (
  id BIGINT PRIMARY KEY,
  serial_number VARCHAR(50) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  status VARCHAR(50) NOT NULL,
  available BOOLEAN NOT NULL,
  checked_out_by VARCHAR(100),
  checked_out_at DATETIME NULL
);

CREATE INDEX idx_tool_serial ON tool_items (serial_number);
CREATE INDEX idx_tool_status_available ON tool_items (status, available);
