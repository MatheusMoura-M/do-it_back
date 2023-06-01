import * as yup from "yup";
import { IUserLoginResponse } from "../../interfaces/user";

export const userLoginResponseSchema: yup.SchemaOf<IUserLoginResponse> = yup
  .object()
  .shape({
    user: yup.object().shape({
      email: yup.string().email().required(),
      name: yup.string().required(),
      id: yup.string().required(),
    }),
    accessToken: yup.string().required(),
  });
