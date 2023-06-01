import * as yup from "yup";
import { IUserUpdateRequest } from "../../interfaces/user";

export const userUpdateRequestSchema: yup.SchemaOf<IUserUpdateRequest> = yup
  .object()
  .shape({
    image_url: yup.string().notRequired(),
    isSeller: yup.boolean().notRequired(),
    birthdate: yup.string().notRequired(),
    description: yup.string().notRequired(),
    telephone: yup.string().notRequired(),
    password: yup.string().notRequired(),
    cpf: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
  });
