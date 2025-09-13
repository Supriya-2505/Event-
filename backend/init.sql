-- Initialize the event_scheduler database
-- This script runs when the PostgreSQL container starts for the first time

-- Create the database if it doesn't exist (this is handled by POSTGRES_DB env var)
-- CREATE DATABASE event_scheduler;

-- Connect to the database
\c event_scheduler;

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create a simple function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- The tables will be created automatically by Hibernate/JPA
-- But we can add some initial data or additional constraints here if needed

-- Insert some sample data (optional)
-- This will be overridden by Hibernate's ddl-auto: update setting
-- but can be useful for initial testing

COMMENT ON DATABASE event_scheduler IS 'Event Scheduler Application Database';
