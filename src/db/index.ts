import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const databaseUrl = process.env.DATABASE_URL;

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

const createPool = () => {
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required to connect to the database.");
  }
  const isSsl =
    databaseUrl.includes("sslmode=require") ||
    databaseUrl.includes(".render.com") ||
    databaseUrl.includes("neon.tech") ||
    databaseUrl.includes("supabase.co");

  return new Pool({
    connectionString: databaseUrl,
    ssl: isSsl ? { rejectUnauthorized: false } : undefined,
  });
};

export const pool =
  globalForDb.__arenaNextJsPostgresqlPool ??
  (databaseUrl ? createPool() : (null as unknown as Pool));

if (process.env.NODE_ENV !== "production" && pool) {
  globalForDb.__arenaNextJsPostgresqlPool = pool;
}

export const db = pool
  ? drizzle(pool)
  : (new Proxy(
      {},
      {
        get() {
          throw new Error("DATABASE_URL environment variable is required to execute database operations.");
        },
      }
    ) as ReturnType<typeof drizzle>);

