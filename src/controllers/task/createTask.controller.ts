import { Request, Response } from "express";
import { createTaskService } from "../../services/task";

export const createTaskController = async (req: Request, res: Response) => {
  const newTask = await createTaskService(req.body, req.id);

  return res.status(201).json(newTask);
};
