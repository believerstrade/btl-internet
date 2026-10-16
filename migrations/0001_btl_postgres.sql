CREATE TABLE IF NOT EXISTS connection_requests (
  id BIGSERIAL PRIMARY KEY,
  tracking_id TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  area TEXT NOT NULL,
  address TEXT NOT NULL,
  package_name TEXT,
  preferred_date TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_connection_phone ON connection_requests(phone);

CREATE TABLE IF NOT EXISTS support_tickets (
  id BIGSERIAL PRIMARY KEY,
  ticket_id TEXT NOT NULL UNIQUE,
  customer_ref TEXT,
  phone TEXT NOT NULL,
  category TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_ticket_phone ON support_tickets(phone);
