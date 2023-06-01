import appDataSource from "../../data-source";
import { Task, User } from "../../entities";

const userRepo = appDataSource.getRepository(User);
const taskRepo = appDataSource.getRepository(Task);

export { userRepo, taskRepo };
