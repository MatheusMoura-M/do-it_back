import { Request, Response } from "express";
import { ITaskUpdateRequest } from "../../interfaces/task";
import { updateTaskService } from "../../services/task";

export const updateTaskController = async (req: Request, res: Response) => {
  const taskUpdateData: ITaskUpdateRequest = req.body;
  const userId: string = req.id;
  const taskId: string = req.params.id;
  const taskUpdated = await updateTaskService(taskUpdateData, userId, taskId);

  return res.status(200).json(taskUpdated);
};
