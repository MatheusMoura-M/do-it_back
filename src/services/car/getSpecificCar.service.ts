import { AppError } from "../../error/appError.error";
import { ICarResponse } from "../../interfaces/car";
import { specificCarResponseSchema } from "../../schemas/car";
import { carRepo } from "../../utils/repositories";

export const getSpecificCarService = async (
  carId: string
): Promise<ICarResponse> => {
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

  const carValidated = await specificCarResponseSchema.validate(car, {
    stripUnknown: true,
  });

  return carValidated;
};
