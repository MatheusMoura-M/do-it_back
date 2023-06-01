import { Request, Response } from "express";
import { deleteTaskService } from "../../services/task";

export const deleteTaskController = async (req: Request, res: Response) => {
  const userId: string = req.id;
  const taskId: string = req.params.id;
  const taskDeleted = await deleteTaskService(userId, taskId);
  return res.status(204).json(taskDeleted);
};
