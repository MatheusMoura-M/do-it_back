import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICarRequest } from "../../interfaces/car";

export const carCreateSchema: SchemaOf<ICarRequest> = yup.object().shape({
  images_6: yup.string().notRequired(),
  images_5: yup.string().notRequired(),
  images_4: yup.string().notRequired(),
  images_3: yup.string().notRequired(),
  images_2: yup.string().notRequired(),
  images_1: yup.string().notRequired(),
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.string().required(),
  fuel: yup.string().required(),
  km: yup.number().required(),
  color: yup.string().required(),
  price: yup.string().required(),
  fipe: yup.number().required(),
  description: yup.string().required(),
  published: yup.boolean().required(),
  cover_image: yup.string(),
});
