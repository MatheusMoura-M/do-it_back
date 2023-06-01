import { Request, Response } from "express";
import { getTasksService } from "../../services/task";

export const getTasksController = async (_req: Request, res: Response) => {
  const tasksData = await getTasksService();

  res.status(200).json(tasksData);
};
