import { Request, Response } from "express";
import { sendResetEmailPasswordService } from "../../services/user";

export const resetPasswordEmailController = async (
  req: Request,
  res: Response
) => {
  const { email } = req.body;
  const { protocol } = req;
  const host = req.get("host");

  await sendResetEmailPasswordService(email, protocol, host);

  return res.json({
    message: "Confira o seu email, foi enviado um link para mudança de senha!",
  });
};
