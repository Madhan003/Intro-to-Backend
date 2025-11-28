import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// routes declaration
import userRouter from "./routes/user_route.js";
app.use("/api/v1/users", userRouter); 

// example route: http://localhost:4000/api/v1/users/register
export default app;
