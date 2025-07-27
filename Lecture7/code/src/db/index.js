import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Pool } = pkg;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "backend",
    password: process.env.PASSWORD,
    port: 5432
});
export default pool; 