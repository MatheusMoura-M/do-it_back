import { iUser } from "../user";

export interface ITaskRequest {
  title: string;
  description: string;
}

export interface ITaskResponse extends ITaskRequest {
  id: string;
  completed: boolean;
}

export interface ITaskUpdateRequest {
  title?: string;
  description?: string;
  completed?: boolean;
}

export interface ITaskUpdateResponse {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface iGetTaskResponse extends ITaskResponse {
  user: iUser;
}
