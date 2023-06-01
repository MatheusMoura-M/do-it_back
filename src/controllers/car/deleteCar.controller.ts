import { Request, Response } from "express";
import { deleteCarService } from "../../services/car";

export const deleteCarController = async (req: Request, res: Response) => {
  const userId: string = req.id;
  const carId: string = req.params.id;
  const carDeleted = await deleteCarService(userId, carId);
  return res.status(204).json(carDeleted);
};
