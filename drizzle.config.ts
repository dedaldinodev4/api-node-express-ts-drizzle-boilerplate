import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();
export default {
  schema: "./src/db/schemas/index.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.DB_HOST ?? "",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME ?? "",
  },
  
} satisfies Config;