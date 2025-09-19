import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "../shared/schema";

neonConfig.webSocketConstructor = ws;

// Use Supabase connection string 
const connectionString = process.env.SUPABASE_DATABASE_URL || process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "Database connection string must be set. Check SUPABASE_DATABASE_URL or DATABASE_URL.",
  );
}

export const pool = new Pool({ connectionString });
export const db = drizzle({ client: pool, schema });