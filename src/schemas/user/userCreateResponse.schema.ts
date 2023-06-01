import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserResponse } from "../../interfaces/user";

export const userCreateAndUpdateResponseSchema: SchemaOf<IUserResponse> = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    id: yup.string().required(),
  });
