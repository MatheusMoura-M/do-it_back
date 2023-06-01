import { AppError } from "../../../error/appError.error";
import { ICarImageResponse } from "../../../interfaces/car";
import { carRepo } from "../../../utils/repositories";

export const listCarImageService = async (
  id: string
): Promise<ICarImageResponse[]> => {
  const findCar = await carRepo.findOneBy({ id: id });

  if (!findCar) {
    throw new AppError("Car not found", 404);
  }

  const images = await carRepo.findOne({
    where: {
      id: id,
    },
    relations: {
      images: true,
    },
  });

  return images.images;
};
