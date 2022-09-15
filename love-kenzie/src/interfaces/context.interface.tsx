import { Dispatch, ReactNode } from "react";

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  age: string;
}

export interface IAuthContext {
  createUser: (data: ICreateUser) => string;
  validateEmail: (tokenEmail: IParamsValidateEmail) => string;
  login: (userDataLogin: IUserDataLogin) => string;
  resendEmail: (email : IParamsResendEmail) => string;
  token: string
  message:  string
}

export interface IAuthProvider {
  children: ReactNode;
}

export interface IParamsValidateEmail {
  tokenEmail: any;
}

export interface IUserDataLogin {
  email: string;
  password: string;
}

export interface IParamsResendEmail {
  email: string
}
