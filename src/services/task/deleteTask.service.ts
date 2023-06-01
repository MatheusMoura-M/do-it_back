import { AppError } from "../../error/appError.error";
import { taskRepo, userRepo } from "../../utils/repositories";

export const deleteTaskService = async (
  userId: string,
  taskId: string
): Promise<{}> => {
  const user = await userRepo.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found!", 404);
  }

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
    throw new AppError("You don't have permission to delete this task", 403);
  }

  await taskRepo.delete(task.id);
  return {};
};
