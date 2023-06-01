import { AppError } from "../../error/appError.error";
import { iGetTaskResponse } from "../../interfaces/task";
import { allTasksResponseSchema } from "../../schemas/task";
import { taskRepo, userRepo } from "../../utils/repositories";

export const getTasksByUserService = async (
  userId: string
): Promise<iGetTaskResponse[]> => {
  const userFound = await userRepo.findOne({
    where: { id: userId },
  });

  if (!userFound) {
    throw new AppError("User not found!", 404);
  }

  const tasks = await taskRepo.find({
    where: { user: { id: userId } },
    relations: {
      user: true,
    },
  });

  const tasksValidated = await allTasksResponseSchema.validate(tasks, {
    stripUnknown: true,
  });

  return tasksValidated;
};
