export interface IUserRequest {
  name: string;
  email: string;
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

export interface IUserLoginResponse {
  accessToken: string;
  user: IUserResponse;
}

export interface IUserUpdateRequest {
  name?: string;
  email?: string;
  password?: string;
}

export interface iUserUpdateResponse
  extends Omit<IUserUpdateRequest, "password"> {
  id: string;
}

export interface iGetUserResponse {
  id: string;
  name: string;
  email: string;
}

export interface iUser {
  id: string;
}
