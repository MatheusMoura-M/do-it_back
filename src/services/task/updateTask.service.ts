import { AppError } from "../../error/appError.error";
import { ITaskUpdateRequest, ITaskUpdateResponse } from "../../interfaces/task";
import { taskUpdateSchema } from "../../schemas/task";
import { taskRepo, userRepo } from "../../utils/repositories";

export const updateTaskService = async (
  taskUpdateData: ITaskUpdateRequest,
  userId: string,
  taskId: string
): Promise<ITaskUpdateResponse> => {
  for (let elem in taskUpdateData) {
    if (taskUpdateData[elem] === "") {
      delete taskUpdateData[elem];
    }
  }

  const user = await userRepo.findOneBy({
    id: userId,
  });

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

  if (task.user.id !== user!.id) {
    throw new AppError("You don't have permission to update this task", 403);
  }

  const updatedTask = taskRepo.create({
    ...task,
    ...taskUpdateData,
  });

  await taskRepo.save(updatedTask);

  const returnTask = await taskUpdateSchema.validate(updatedTask, {
    stripUnknown: true,
  });

  return returnTask;
};
