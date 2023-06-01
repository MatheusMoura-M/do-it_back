import * as yup from "yup";
import { SchemaOf } from "yup";
import { iGetUserResponse } from "../../interfaces/user";

export const getSpecificUserSchema: SchemaOf<iGetUserResponse> = yup
  .object()
  .shape({
    tasks: yup.array(
      yup.object().shape({
        completed: yup.boolean().required(),
        description: yup.string().required(),
        title: yup.string().required(),
        id: yup.string().required(),
      })
    ),
    email: yup.string().email().required(),
    name: yup.string().required(),
    id: yup.string().required(),
  });
