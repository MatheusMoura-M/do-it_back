import { AppError } from "../../error/appError.error";
import { carRepo, userRepo } from "../../utils/repositories";

export const deleteCarService = async (
  userId: string,
  carId: string
): Promise<{}> => {
  const user = await userRepo.findOneBy({
    id: userId,
  });

  const car = await carRepo.findOne({
    where: {
      id: carId,
    },
    relations: {
      user: true,
    },
  });

  if (!car) {
    throw new AppError("Car not found!", 404);
  }

  if (car.user.id !== user!.id) {
    throw new AppError("You don't have permission to delete this car", 403);
  }

  await carRepo.delete(car.id);
  return {};
};
