import { AppError } from "../../../error/appError.error";
import { ICarImageResponse } from "../../../interfaces/car";
import { carRepo, imageRepo } from "../../../utils/repositories";

export const createCarImageService = async (
  url_image: string,
  id: string,
  id_user: string
): Promise<ICarImageResponse> => {
  const findCar = await carRepo.findOneBy({ id: id });

  if (!findCar) {
    throw new AppError("Car not found", 404);
  }

  const is_Owner = await carRepo
    .createQueryBuilder("cars")
    .innerJoinAndSelect("cars.user", "user")
    .where("cars.id = :id_car", { id_car: id })
    .andWhere("user.id = :id_user", { id_user: id_user })
    .getOne();

  if (!is_Owner) {
    throw new AppError("You don't have permission to delete this car", 403);
  }

  const createImage = imageRepo.create({
    image_url: url_image,
    car: findCar,
  });
  await imageRepo.save(createImage);

  return createImage;
};
