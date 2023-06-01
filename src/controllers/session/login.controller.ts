import { Request, Response } from "express";
import { loginService } from "../../services/session/login.service";

export const userLoginController = async (req: Request, res: Response) => {
  const accessToken = await loginService(req.body);

  return res.status(200).json(accessToken);
};
