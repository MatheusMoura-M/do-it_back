import { iGetTaskResponse } from "../../interfaces/task";
import { allTasksResponseSchema } from "../../schemas/task";
import { taskRepo } from "../../utils/repositories";

export const getTasksService = async (): Promise<iGetTaskResponse[]> => {
  const tasks = await taskRepo.find({
    relations: {
      user: true,
    },
  });

  const tasksValidated = await allTasksResponseSchema.validate(tasks, {
    stripUnknown: true,
  });

  return tasksValidated;
};
