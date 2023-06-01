import { Request, Response } from "express";
import { getCarsService } from "../../services/car";

export const getCarsController = async (_req: Request, res: Response) => {
  const carsData = await getCarsService();

  res.status(200).json(carsData);
};
