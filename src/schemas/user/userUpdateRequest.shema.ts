import * as yup from "yup";
import { IUserUpdateRequest } from "../../interfaces/user";

export const userUpdateRequestSchema: yup.SchemaOf<IUserUpdateRequest> = yup
  .object()
  .shape({
    password: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
  });
