import * as yup from "yup";
import { SchemaOf } from "yup";
import { ITaskUpdateResponse } from "../../interfaces/task";

export const taskUpdateSchema: SchemaOf<ITaskUpdateResponse> = yup
  .object()
  .shape({
    completed: yup.boolean().notRequired(),
    description: yup.string().notRequired(),
    title: yup.string().notRequired(),
    id: yup.string().notRequired(),
  });
