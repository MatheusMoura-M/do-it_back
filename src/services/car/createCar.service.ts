import { AppError } from "../../error/appError.error";
import { IBrandResponse, ICarRequest } from "../../interfaces/car";
import { carResponseSchema } from "../../schemas/car";
import {
  brandRepo,
  carRepo,
  userRepo,
  imageRepo,
} from "../../utils/repositories";

export const createCarService = async (
  carData: ICarRequest,
  userId: string,
  isGoodPrice: boolean
) => {
  for (let elem in carData) {
    if (carData[elem] === "") {
      delete carData[elem];
    }
  }

  const userData = await userRepo.findOneBy({
    id: userId,
  });

  if (!userData) {
    throw new AppError("User not found", 404);
  }

  if (!userData.isSeller) {
    throw new AppError("User is not a seller", 409);
  }

  const getBrand = await brandRepo.findOneBy({ name: carData.brand });
  let brand: IBrandResponse | null = getBrand;

  if (!brand) {
    const newBrand = brandRepo.create({ name: carData.brand });
    await brandRepo.save(newBrand);

    brand = newBrand;
  }

  let carImage = carData.cover_image;

  if (!carData.cover_image) {
    carImage =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwHeo1aZFE29ryE5ZNrOA1SvJ0Xe_wXt5FnqqvI68h1m10xjF7fRHRoWoO5H2fX7xPPw&usqp=CAU";
  }

  const car = {
    brand: carData.brand,
    model: carData.model,
    year: carData.year,
    fuel: carData.fuel,
    km: carData.km,
    color: carData.color,
    price: carData.price,
    fipe: carData.fipe,
    description: carData.description,
    published: carData.published,
    cover_image: carData.cover_image,
    brand_car: brand,
    user: userData,
    is_good_price: isGoodPrice,
  };

  const newCar = carRepo.create({ ...car, cover_image: carImage });
  await carRepo.save(newCar);

  const carCreated = await carRepo.findOneBy({
    id: newCar.id,
  });

  if (!carCreated) {
    throw new AppError("Car not found", 404);
  }

  for (let elem in carData) {
    if (elem.includes("images") && carData[elem] !== "") {
      const newImageCar = imageRepo.create({
        image_url: carData[elem],
        car: carCreated,
      });
      await imageRepo.save(newImageCar);
    }
  }

  const carWithImages = await carRepo.findOne({
    where: {
      id: newCar.id,
    },
    relations: {
      images: true,
      user: true,
    },
  });

  const returnCar = await carResponseSchema.validate(carWithImages, {
    stripUnknown: true,
  });

  return returnCar;
};
