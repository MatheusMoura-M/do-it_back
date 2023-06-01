import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleError } from "./error/appError.error";
import { sessionRoutes, taskRoutes, userRoutes } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/login", sessionRoutes);
app.use("/task", taskRoutes);

app.use(handleError);

export default app;
