import { Request, Response } from "express";
import { resetUserPasswordService } from "../../services/user";

export const resetPasswordUserController = async (
  req: Request,
  res: Response
) => {
  const { password } = req.body;
  const { token } = req.params;
  await resetUserPasswordService(password, token);
  return res.json({ message: "Password has change with sucess." });
};
