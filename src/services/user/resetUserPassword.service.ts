import { hashSync } from "bcryptjs";
import { AppError } from "../../error/appError.error";
import { userRepo } from "../../utils/repositories";

export const resetUserPasswordService = async (
  password: string,
  resetToken: string
) => {
  const userFound = await userRepo.findOne({
    where: {
      reset_token: resetToken,
    },
  });

  if (!userFound) {
    throw new AppError("User not found or token expired!", 404);
  }

  const userUpdated = {
    ...userFound,
    password: hashSync(password, 10),
    reset_token: null,
  };

  userRepo.save(userUpdated);
};
