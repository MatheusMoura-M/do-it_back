import { AppError } from "../../error/appError.error";
import { userRepo } from "../../utils/repositories";

export const listSellerCarsService = async (idSeller: string) => {
  const isUser = userRepo.findOneBy({ id: idSeller });

  if (!isUser) {
    throw new AppError("User not found", 404);
  }

  const res = await userRepo.findOne({
    where: {
      id: idSeller,
    },
    relations: {
      cars: true,
    },
  });

  return res;
};
