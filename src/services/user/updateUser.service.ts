import { AppError } from "../../error/appError.error";
import { IUserUpdateRequest, iUserUpdateResponse } from "../../interfaces/user";
import { userUpdateResponseSchema } from "../../schemas/user";
import { carRepo, userRepo } from "../../utils/repositories";

export const updateUserService = async (
  id: string,
  payload: IUserUpdateRequest
): Promise<iUserUpdateResponse> => {
  for (let elem in payload) {
    if (payload[elem] === "") {
      delete payload[elem];
    }
  }

  const userFound = await userRepo.findOneBy({
    id: id,
  });

  if (!userFound) {
    throw new AppError("User not found!", 404);
  }

  const userUpdated = {
    ...userFound,
    ...payload,
  };

  const userCars = await carRepo.find({
    where: {
      user: {
        id: userFound.id,
      },
    },
  });

  if (!userUpdated.isSeller) {
    for await (let car of userCars) {
      await carRepo.delete(car.id);
    }
  }
  await userRepo.save(userUpdated);

  // if (!userUpdated.isSeller) {
  //   userCars.forEach(async (car) => {
  //     const updatedCar = {
  //       ...car,
  //       published: false,
  //     };
  //     await carRepo.save(updatedCar);
  //   });
  // } else {
  //   userCars.forEach(async (car) => {
  //     const updatedCar = {
  //       ...car,
  //       published: true,
  //     };
  //     await carRepo.save(updatedCar);
  //   });
  // }

  const userWithout = await userUpdateResponseSchema.validate(userUpdated, {
    stripUnknown: true,
  });

  return userWithout;
};
