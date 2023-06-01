import { v4 as uuidv4 } from "uuid";
import { AppError } from "../../error/appError.error";
import { userRepo } from "../../utils/repositories";
import { emailService } from "../../utils/resetPassword/sendEmail.utils";

export const sendResetEmailPasswordService = async (
  email: string,
  protocol: string,
  host: string
) => {
  const getUser = await userRepo.findOneBy({
    email: email,
  });

  if (!getUser) {
    throw new AppError("User not found!", 404);
  }

  const resetToken = uuidv4();

  const userWithResetCamp = {
    ...getUser,
    reset_token: resetToken,
  };

  await userRepo.save(userWithResetCamp);

  const resetPasswordTemplate = emailService.resetPasswordTemplate(
    email,
    getUser.name,
    protocol,
    host,
    resetToken
  );

  await emailService.sendEmail(resetPasswordTemplate);
};
