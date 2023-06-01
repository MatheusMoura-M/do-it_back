import * as yup from "yup";
import { SchemaOf } from "yup";
import { ITaskRequest } from "../../interfaces/task";

export const taskCreateSchema: SchemaOf<ITaskRequest> = yup.object().shape({
  description: yup.string().required(),
  title: yup.string().required(),
});
