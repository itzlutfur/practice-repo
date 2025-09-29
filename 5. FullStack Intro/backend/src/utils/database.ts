import { Pool, PoolClient } from "pg";

// postgresql connection configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "UniversityDB",
  password: "admin123",
  port: 5433, // default PostgreSQL port
});

// Function to test database connection
export async function testDatabaseConnection() {
  let client: PoolClient | null = null;
  try {
    client = await pool.connect();
    console.log("Connected to the database successfully.");
  } catch (err) {
    console.error("Database connection error:", err);
  } finally {
    if (client) {
      client.release();
    }
  }
}

// function to connect to the database
export async function connectToPostgres(): Promise<void> {
  try {
    const client: PoolClient = await pool.connect();
    console.log("Connected to PostgreSQL database");
    client.release();
  } catch (error) {
    console.error("Error connecting to PostgreSQL database:", error);
    throw error;
  }
}

// execute query function
export async function executeQuery(
  query: string,
  params?: any[]
): Promise<any> {
  try {
    const client = await pool.connect();
    const result = await client.query(query, params);
    client.release();
    return result;
  } catch (err) {
    console.error("Database operation error:", err);
    throw err;
  }
}
