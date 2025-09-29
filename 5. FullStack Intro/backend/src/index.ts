import cors from "cors";
import express, { Request, Response } from "express";
import {
  connectToPostgres,
  executeQuery,
  testDatabaseConnection,
} from "./utils/database";
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.post("/data", (req: Request, res: Response) => {
  const { name, email, description } = req.body;
  executeQuery(
    "INSERT INTO student (name, email, description) VALUES ($1, $2, $3)",
    [name, email, description]
  );
  res.status(200).json({
    message: `${name}`,
    email: `${email}`,
    description: `${description}`,
    status: "Success",
  });
});

app.get("/alldata", async(req: Request, res: Response) => {
  try {
    const alldata = await executeQuery("SELECT * FROM student");
    
    res.json({ data: alldata.rows, status: "Success" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);

  try {
    connectToPostgres();
    testDatabaseConnection();
  } catch (error) {
    console.error("Error connecting to PostgreSQL database:", error);
    throw error;
  }
});
