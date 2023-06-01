import { Request, Response } from "express";
import { ICarUpdate } from "../../interfaces/car";
import { updateCarService } from "../../services/car";

export const updateCarController = async (req: Request, res: Response) => {
  const carUpdateData: ICarUpdate = req.body;
  const userId: string = req.id;
  const carId: string = req.params.id;
  const carUpdated = await updateCarService(
    carUpdateData,
    userId,
    carId,
    req.isGoodDeal
  );
  return res.status(200).json(carUpdated);
};
