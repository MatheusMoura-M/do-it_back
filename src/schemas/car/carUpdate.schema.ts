import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICarUpdateResponse } from "../../interfaces/car";

export const carUpdateSchema: SchemaOf<ICarUpdateResponse> = yup
  .object()
  .shape({
    images: yup.array(
      yup.object().shape({
        id: yup.string().notRequired(),
        image_url: yup.string().notRequired(),
        car: yup.object().shape({}).notRequired(),
      })
    ),
    cover_image: yup.string().notRequired(),
    published: yup.boolean().notRequired(),
    description: yup.string().notRequired(),
    fipe: yup.number().notRequired(),
    price: yup.string().notRequired(),
    color: yup.string().notRequired(),
    km: yup.number().notRequired(),
    fuel: yup.string().notRequired(),
    year: yup.string().notRequired(),
    model: yup.string().notRequired(),
    brand: yup.string().notRequired(),
    id: yup.string().notRequired(),
  });
