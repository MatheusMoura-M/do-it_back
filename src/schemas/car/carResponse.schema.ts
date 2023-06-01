import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICarResponse } from "../../interfaces/car";

export const carResponseSchema: SchemaOf<ICarResponse> = yup.object().shape({
  user: yup.object().shape({
    id: yup.string().required(),
  }),
  images: yup.array(
    yup.object().shape({
      id: yup.string().notRequired(),
      image_url: yup.string().notRequired(),
      car: yup.object().shape({}).notRequired(),
    })
  ),
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
});
