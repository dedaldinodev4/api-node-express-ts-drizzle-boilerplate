import 'dotenv/config';
import { migrate } from "drizzle-orm/mysql2/migrator";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from 'mysql2/promise'

export const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

const db = drizzle(connection)

// this will automatically run needed migrations on the database
const main = () => {
  migrate(db, { migrationsFolder: "drizzle" })
    .then(() => {
      console.log("Migrations complete!");
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

}

main();
connection.end();