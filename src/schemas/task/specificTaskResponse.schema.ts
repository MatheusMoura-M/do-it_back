import * as yup from "yup";
import { SchemaOf } from "yup";
import { iGetTaskResponse } from "../../interfaces/task";

export const specificTaskResponseSchema: SchemaOf<iGetTaskResponse> = yup
  .object()
  .shape({
    user: yup.object().shape({
      id: yup.string().required(),
    }),
    completed: yup.boolean().required(),
    description: yup.string().required(),
    title: yup.string().required(),
    id: yup.string().required(),
  });
