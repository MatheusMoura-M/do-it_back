export interface ICarRequest {
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: number;
  color: string;
  price: string;
  fipe: number;
  description: string;
  published: boolean;
  cover_image: string;
  images_1?: string;
  images_2?: string;
  images_3?: string;
  images_4?: string;
  images_5?: string;
  images_6?: string;
}

export interface ICarResponse {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: number;
  color: string;
  price: string;
  fipe: number;
  description: string;
  published: boolean;
  cover_image: string;
  is_good_price: boolean;
  images: ICarImageResponse[];
}

export interface ICarResponseTest extends ICarRequest {
  is_good_price: boolean;
}

export interface ICarUpdate {
  brand?: string;
  model?: string;
  year?: string;
  fuel?: string;
  km?: number;
  color?: string;
  price?: string;
  fipe?: number;
  description?: string;
  published?: boolean;
  cover_image?: string;
  images_1?: string;
  images_2?: string;
  images_3?: string;
  images_4?: string;
  images_5?: string;
  images_6?: string;
}

export interface iCarList {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: number;
  color: string;
  price: string;
  fipe: number;
  description: string;
  published: boolean;
  cover_image: string;
}

export interface ICarImageResponse {
  id: string;
  image_url: string;
  car?: ICarResponse;
}

export interface IBrandResponse {
  id: string;
  name: string;
}

export interface ICarUpdateResponse {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: number;
  color: string;
  price: string;
  fipe: number;
  description: string;
  published: boolean;
  cover_image: string;
  images: ICarImageResponse[];
}
