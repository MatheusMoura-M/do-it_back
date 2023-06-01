import { carRepo } from "../../utils/repositories";

export const listUserCarsService = (userId: string) => {

  const cars = carRepo.findBy({
    user: {
      id: userId,
    },
  });
  return cars;
};
