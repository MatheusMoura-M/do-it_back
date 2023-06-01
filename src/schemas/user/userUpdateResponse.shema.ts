import * as yup from "yup";
import { iUserUpdateResponse } from "../../interfaces/user";

export const userUpdateResponseSchema: yup.SchemaOf<iUserUpdateResponse> = yup
  .object()
  .shape({
    image_url: yup.string().notRequired(),
    isSeller: yup.boolean().notRequired(),
    birthdate: yup.string().notRequired(),
    description: yup.string().notRequired(),
    telephone: yup.string().notRequired(),
    cpf: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    id: yup.string().notRequired(),
  });
