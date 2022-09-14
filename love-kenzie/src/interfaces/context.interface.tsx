import { ReactNode } from "react";

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IAuthContext {
  createUser: (data: ICreateUser) => Promise<string>;
  validateEmail: (tokenEmail: IParamsValidateEmail) => Promise<string>;
  login: (userDataLogin: IUserDataLogin) => Promise<string>;
  resendEmail: (email : IParamsResendEmail) => Promise<string>
}

export interface IAuthProvider {
  children: ReactNode;
}

export interface IParamsValidateEmail {
  tokenEmail: string;
}

export interface IUserDataLogin {
  email: string;
  password: string;
}

export interface IParamsResendEmail {
  email: string
}
