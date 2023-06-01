import * as yup from "yup";
import { IUserRequest } from "../../interfaces/user";

export const userCreateRequestSchema: yup.SchemaOf<IUserRequest> = yup
  .object()
  .shape({
    image_url: yup.string().notRequired(),
    isSeller: yup.boolean().required(),
    birthdate: yup.string().required(),
    description: yup.string().required(),
    telephone: yup.string().required(),
    password: yup.string().required(),
    cpf: yup.string().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
    number: yup.string().required(),
    zipcode: yup.string().required(),
    complement: yup.string().required(),
  });

