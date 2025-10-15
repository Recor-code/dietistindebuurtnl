import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../shared/schema';

// Lazy initialize database connection only when needed
let dbInstance: ReturnType<typeof drizzle> | null = null;

function getDb() {
  if (!dbInstance) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is required');
    }
    const connectionString = process.env.DATABASE_URL;
    const client = postgres(connectionString);
    dbInstance = drizzle(client, { schema });
  }
  return dbInstance;
}

// Export a proxy that lazily initializes the connection
export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get: (target, prop) => {
    const instance = getDb();
    return (instance as any)[prop];
  }
});

export * from '../shared/schema';