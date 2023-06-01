import { Router } from "express";
import { bodyValidator, validateTokenMiddleware } from "../middlewares";
import {
  createUserController,
  deleteUserController,
  resetPasswordEmailController,
  updateUserController,
  userProfileController,
  resetPasswordUserController,
  getUserController,
} from "../controllers/user";
import { listUserCarsController } from "../controllers/car";
import {
  userCreateRequestSchema,
  userUpdateRequestSchema,
} from "../schemas/user";

const userRoutes = Router();

userRoutes.post(
  "",
  // bodyValidator(userCreateRequestSchema),
  createUserController
);
userRoutes.get("/profile", validateTokenMiddleware, userProfileController);
userRoutes.get("/cars", validateTokenMiddleware, listUserCarsController);

userRoutes.patch(
  "",
  validateTokenMiddleware,
  bodyValidator(userUpdateRequestSchema),
  updateUserController
);

userRoutes.delete("", validateTokenMiddleware, deleteUserController);
userRoutes.post("/reset-password", resetPasswordEmailController);
userRoutes.patch("/reset-password/:token", resetPasswordUserController);

userRoutes.get("/:id", getUserController);

export default userRoutes;
