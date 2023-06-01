import { Router } from "express";
import {
  createCarController,
  createCarImageController,
  deleteCarController,
  deleteCarImageController,
  getCarsController,
  getSpecificCarController,
  listCarImageController,
  listSellerCarsController,
  updateCarController,
} from "../controllers/car";
import {
  bodyValidator,
  isAvalidUUID,
  validateTokenMiddleware,
  verifyGoodDealMiddleware,
} from "../middlewares";
import { listBrandsController } from "../controllers/Brand";
import { carCreateSchema, carUpdateSchema } from "../schemas/car";

const carRoutes = Router();

carRoutes.post(
  "",
  validateTokenMiddleware,
  bodyValidator(carCreateSchema),
  verifyGoodDealMiddleware,
  createCarController
);

carRoutes.get("", getCarsController);
carRoutes.get("/brands", listBrandsController);
carRoutes.get("/:id", getSpecificCarController);

carRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  verifyGoodDealMiddleware,
  updateCarController
);

carRoutes.delete(
  "/:id",
  isAvalidUUID,
  validateTokenMiddleware,
  deleteCarController
);

carRoutes.post(
  "/image/:id",
  isAvalidUUID,
  validateTokenMiddleware,
  createCarImageController
);

carRoutes.get("/image/:id", isAvalidUUID, listCarImageController);

carRoutes.delete(
  "/image/:id",
  isAvalidUUID,
  validateTokenMiddleware,
  deleteCarImageController
);

carRoutes.get("/seller/:id", listSellerCarsController);

export default carRoutes;
