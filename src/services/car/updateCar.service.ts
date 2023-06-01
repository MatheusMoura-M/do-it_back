import { AppError } from "../../error/appError.error";
import { ICarUpdate, ICarUpdateResponse } from "../../interfaces/car";
import { carResponseSchema, carUpdateSchema } from "../../schemas/car";
import { carRepo, imageRepo, userRepo } from "../../utils/repositories";

export const updateCarService = async (
  carUpdateData: ICarUpdate,
  userId: string,
  carId: string,
  isGoodPrice: boolean
): Promise<ICarUpdateResponse> => {
  for (let elem in carUpdateData) {
    if (carUpdateData[elem] === "") {
      delete carUpdateData[elem];
    }
  }

  const user = await userRepo.findOneBy({
    id: userId,
  });

  const car = await carRepo.findOne({
    where: {
      id: carId,
    },
    relations: {
      user: true,
      images: true,
    },
  });

  if (!car) {
    throw new AppError("Car not found!", 404);
  }

  if (car.user.id !== user!.id) {
    throw new AppError("You don't have permission to update this car", 403);
  }

  const updatedCar = carRepo.create({
    ...car,
    ...carUpdateData,
    is_good_price: isGoodPrice,
  });

  await carRepo.save(updatedCar);

  const returnCar = await carUpdateSchema.validate(updatedCar, {
    stripUnknown: true,
  });

  return returnCar;
};
