import { iCarList } from "../car";

export interface IUserRequest {
  image_url: string;
  isSeller: boolean;
  birthdate: string;
  description: string;
  telephone: string;
  cpf: string;
  email: string;
  name: string;
  state: string;
  city: string;
  street: string;
  number: string;
  zipcode: string;
  complement: string;
  password: string;
}

export interface iOmitClientPassword extends Omit<IUserRequest, "password"> {}

export interface IUserResponse extends iOmitClientPassword {
  id: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdateRequest {
  name?: string;
  email?: string;
  cpf?: string;
  telephone?: string;
  birthdate?: string;
  description?: string;
  password?: string;
  image_url?: string;
  isSeller?: boolean;
}

export interface iUserUpdateResponse
  extends Omit<IUserUpdateRequest, "password"> {
  id?: string;
}

export interface ISendEmailRequest {
  to: string;
  subject: string;
  text: string;
}

export interface iAddressUpdateRequest {
  street?: string;
  zipcode?: string;
  state?: string;
  city?: string;
  number?: string;
  complement?: string;
}

export interface iAddressUpdateResponse {
  id: string;
  street: string;
  zipcode: string;
  state: string;
  city: string;
  number: string;
  complement: string;
}

export interface iGetUserResponse {
  id: string;
  name: string;
  email: string;
  cpf: string;
  telephone: string;
  birthdate: string;
  description: string;
  image_url: string;
  isSeller: boolean;
}

export interface iListCarsSeller {
  id: string;
  name: string;
  email: string;
  cpf: string;
  telephone: string;
  birthdate: string;
  description: string;
  image_url: string;
  isSeller: boolean;
  cars: iCarList[];
}
