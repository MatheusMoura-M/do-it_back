import { Request, Response } from "express";
import { createCarImageService } from "../../../services/car";

export const createCarImageController = async (req: Request, res: Response) => {
  const returned = await createCarImageService(
    req.body.image_url,
    req.params.id,
    req.id
  );

  return res.status(201).json(returned);
};
