import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICarResponse } from "../../interfaces/car";

export const allCarsResponseSchema: SchemaOf<ICarResponse[]> = yup.array(
  yup.object().shape({
    images: yup.array(
      yup.object().shape({
        id: yup.string().notRequired(),
        image_url: yup.string().notRequired(),
        car: yup.object().shape({}).notRequired(),
      })
    ),
    user: yup.object().shape({
      id: yup.string().required(),
      name: yup.string().required(),
      image_url: yup.string().required(),
    }),
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
);
