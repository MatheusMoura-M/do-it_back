import { AppError } from "../../../error/appError.error";
import { carRepo, imageRepo } from "../../../utils/repositories";

export const deleteCarImageService = async (
  id_image: string,
  id_user: string
): Promise<void> => {
  const is_image = await imageRepo.findOneBy({ id: id_image });

  const is_Owner = await carRepo
    .createQueryBuilder("cars")
    .innerJoinAndSelect("cars.user", "user")
    .innerJoinAndSelect("cars.images", "image")
    .where("image.id = :id_image", { id_image: id_image })
    .andWhere("user.id = :id_user", { id_user: id_user })
    .getOne();

  if (!is_Owner) {
    throw new AppError("You don't have permission to delete this car", 403);
  }

  if (!is_image) {
    throw new AppError("image not found", 404);
  }

  await imageRepo.delete({ id: id_image });
};
