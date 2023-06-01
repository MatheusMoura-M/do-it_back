import { Request, Response } from "express";
import { listUserCarsService } from "../../services/car";

export const listUserCarsController = async (req: Request, res: Response) => {
  const userId: string = req.id;
  const data = await listUserCarsService(userId);

  return res.json(data);
};
