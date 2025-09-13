-- Setup script for local PostgreSQL database
-- Run this script in your PostgreSQL database

-- Create database (run this as superuser)
-- CREATE DATABASE event_scheduler;

-- Connect to the database
\c event_scheduler;

-- Create user (optional - you can use existing postgres user)
-- CREATE USER eventscheduler WITH PASSWORD 'password';
-- GRANT ALL PRIVILEGES ON DATABASE event_scheduler TO eventscheduler;

-- Grant schema permissions
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- The tables will be created automatically by Hibernate
-- when you run the Spring Boot application

-- Verify database setup
SELECT current_database(), current_user;

COMMENT ON DATABASE event_scheduler IS 'Event Scheduler Application Database - Local Setup';
