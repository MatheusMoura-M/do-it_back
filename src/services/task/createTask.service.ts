import { AppError } from "../../error/appError.error";
import { ITaskRequest } from "../../interfaces/task";
import { taskResponseSchema } from "../../schemas/task";
import { taskRepo, userRepo } from "../../utils/repositories";

export const createTaskService = async (
  taskData: ITaskRequest,
  userId: string
) => {
  for (let elem in taskData) {
    if (taskData[elem] === "") {
      delete taskData[elem];
    }
  }

  const userData = await userRepo.findOneBy({
    id: userId,
  });

  if (!userData) {
    throw new AppError("User not found", 404);
  }

  const newTask = taskRepo.create({ ...taskData, user: userData });
  await taskRepo.save(newTask);

  const taskCreated = await taskRepo.findOneBy({
    id: newTask.id,
  });

  if (!taskCreated) {
    throw new AppError("Task not found", 404);
  }

  const returnTask = await taskResponseSchema.validate(taskCreated, {
    stripUnknown: true,
  });

  return returnTask;
};
