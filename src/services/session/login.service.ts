import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../error/appError.error";
import { userRepo } from "../../utils/repositories";
import { IUserLogin, IUserLoginResponse } from "../../interfaces/user";
import { userLoginResponseSchema } from "../../schemas/session/userLoginResponse.schema";

export const loginService = async ({
  email,
  password,
}: IUserLogin): Promise<IUserLoginResponse> => {
  const user = await userRepo.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("User not found!", 404);
  }

  const passwordCheck = await compare(password, user?.password as string);

  if (!passwordCheck) {
    throw new AppError("Invalid User or password!", 403);
  }

  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
    },
    process.env.SECRET_KEY as string,
    {
      subject: String(user.id),
      expiresIn: process.env.EXPIRES_IN,
    }
  );

  const returned = { accessToken: token, user: user };

  const returnedValidate = userLoginResponseSchema.validate(returned, {
    stripUnknown: true,
  });

  return returnedValidate;
};
