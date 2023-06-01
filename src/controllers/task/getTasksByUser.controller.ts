import { Request, Response } from "express";
import { getTasksByUserService } from "../../services/task";

export const getTasksByUserController = async (req: Request, res: Response) => {
  const tasksData = await getTasksByUserService(req.id);

  res.status(200).json(tasksData);
};
