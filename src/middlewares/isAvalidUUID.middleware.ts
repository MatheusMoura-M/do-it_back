import { NextFunction, Request, Response } from "express";
import validate from "uuid-validate";

export const isAvalidUUID = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const is_ValidUUID = validate(req.params.id);

  if (!is_ValidUUID) {
    return res.status(409).json({ error: "UUID is not valid" });
  }

  next();
};
