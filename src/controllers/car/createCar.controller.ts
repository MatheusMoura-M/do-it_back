import { Request, Response } from "express";
import { createCarService } from "../../services/car";

export const createCarController = async (req: Request, res: Response) => {
  const newCar = await createCarService(req.body, req.id, req.isGoodDeal);

  return res.status(201).json(newCar);
};
