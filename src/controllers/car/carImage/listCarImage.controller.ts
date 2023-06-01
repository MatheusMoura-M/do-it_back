import { Response, Request } from "express";
import { listCarImageService } from "../../../services/car";

export const listCarImageController = async (req: Request, res: Response) => {
  const returned = await listCarImageService(req.params.id);

  return res.status(200).json(returned);
};
