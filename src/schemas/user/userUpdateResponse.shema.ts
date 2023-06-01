import * as yup from "yup";
import { iUserUpdateResponse } from "../../interfaces/user";

export const userUpdateResponseSchema: yup.SchemaOf<iUserUpdateResponse> = yup
  .object()
  .shape({
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    id: yup.string().notRequired(),
  });
