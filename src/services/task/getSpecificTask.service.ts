import { AppError } from "../../error/appError.error";
import { ITaskResponse } from "../../interfaces/task";
import { specificTaskResponseSchema } from "../../schemas/task";
import { taskRepo } from "../../utils/repositories";

export const getSpecificTaskService = async (
  taskId: string
): Promise<ITaskResponse> => {
  const task = await taskRepo.findOne({
    where: {
      id: taskId,
    },
    relations: {
      user: true,
    },
  });

  if (!task) {
    throw new AppError("Task not found!", 404);
  }

  const taskValidated = await specificTaskResponseSchema.validate(task, {
    stripUnknown: true,
  });

  return taskValidated;
};
