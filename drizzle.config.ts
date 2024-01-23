import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();
export default {
  schema: "./src/schemas/**/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!!
  },
  tablesFilter: ["__*"],
} satisfies Config;