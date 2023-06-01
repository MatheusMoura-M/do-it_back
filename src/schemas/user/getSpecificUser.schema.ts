import * as yup from "yup";
import { SchemaOf } from "yup";
import { iGetUserResponse } from "../../interfaces/user";

export const getSpecificUserSchema: SchemaOf<iGetUserResponse> = yup
  .object()
  .shape({
    cars: yup.array(
      yup.object().shape({
        cover_image: yup.string().required(),
        published: yup.boolean().required(),
        is_good_price: yup.boolean().required(),
        description: yup.string().required(),
        fipe: yup.number().required(),
        price: yup.string().required(),
        color: yup.string().required(),
        km: yup.number().required(),
        fuel: yup.string().required(),
        year: yup.string().required(),
        model: yup.string().required(),
        brand: yup.string().required(),
        id: yup.string().required(),
      })
    ),
    birthdate: yup.string().required(),
    isSeller: yup.boolean().required(),
    image_url: yup.string().required(),
    description: yup.string().required(),
    cpf: yup.string().required(),
    telephone: yup.string().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    id: yup.string().required(),
  });
