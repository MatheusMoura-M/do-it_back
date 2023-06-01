import { Request, Response } from "express";
import { getSpecificTaskService } from "../../services/task";

export const getSpecificTaskController = async (
  req: Request,
  res: Response
) => {
  const taskId: string = req.params.id;
  const task = await getSpecificTaskService(taskId);
  return res.status(200).json(task);
};
