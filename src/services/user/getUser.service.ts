import { AppError } from "../../error/appError.error";
import { iGetUserResponse } from "../../interfaces/user";
import { getSpecificUserSchema } from "../../schemas/user/getSpecificUser.schema";
import { userRepo } from "../../utils/repositories";

export const getUserService = async (userId: string) => {
  const getUser = await userRepo.findOne({
    where: { id: userId },
    relations: {
      cars: true,
    },
  });

  if (!getUser) {
    throw new AppError("User not found!", 404);
  }

  const clientWithoutPassword = await getSpecificUserSchema.validate(getUser, {
    stripUnknown: true,
  });

  return clientWithoutPassword;
};
