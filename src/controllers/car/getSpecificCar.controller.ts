import { Request, Response } from "express";
import { getSpecificCarService } from "../../services/car";

export const getSpecificCarController = async (req: Request, res: Response) => {
  const carId: string = req.params.id;
  const car = await getSpecificCarService(carId);
  return res.status(200).json(car);
};
