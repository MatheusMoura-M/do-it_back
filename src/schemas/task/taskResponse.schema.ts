import * as yup from "yup";
import { SchemaOf } from "yup";
import { ITaskResponse } from "../../interfaces/task";

export const taskResponseSchema: SchemaOf<ITaskResponse> = yup.object().shape({
  completed: yup.boolean().required(),
  description: yup.string().required(),
  title: yup.string().required(),
  id: yup.string().required(),
});
