import { Router } from "express";
import {
  createTaskController,
  deleteTaskController,
  getTasksController,
  getSpecificTaskController,
  updateTaskController,
  getTasksByUserController,
} from "../controllers/task";
import {
  bodyValidator,
  isAvalidUUID,
  validateTokenMiddleware,
} from "../middlewares";
import { taskCreateSchema } from "../schemas/task";

const taskRoutes = Router();

taskRoutes.post(
  "",
  validateTokenMiddleware,
  bodyValidator(taskCreateSchema),
  createTaskController
);

taskRoutes.get("", getTasksController);
taskRoutes.get("/user", validateTokenMiddleware, getTasksByUserController);
taskRoutes.get("/:id", getSpecificTaskController);

taskRoutes.patch("/:id", validateTokenMiddleware, updateTaskController);

taskRoutes.delete(
  "/:id",
  isAvalidUUID,
  validateTokenMiddleware,
  deleteTaskController
);

export default taskRoutes;
