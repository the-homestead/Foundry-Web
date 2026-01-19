import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { schema } from "./schema";

config({ path: ".env" }); // or .env.local

export const db = drizzle(
  {
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    },
    sslmode: "verify-full",
  },
  { schema }
);
