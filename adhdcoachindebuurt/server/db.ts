import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from "../shared/schema";

// Get database URL from environment variables
const databaseUrl = process.env.SUPABASE_DATABASE_URL || process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "Database URL must be set. Check SUPABASE_DATABASE_URL or DATABASE_URL.",
  );
}

// Create PostgreSQL client for Supabase
const client = postgres(databaseUrl);
export const db = drizzle(client, { schema });