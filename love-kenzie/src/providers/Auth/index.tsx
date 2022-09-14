import { AxiosResponse } from "axios";
import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  IAuthContext,
  IAuthProvider,
  ICreateUser,
  IParamsResendEmail,
  IParamsValidateEmail,
  IUserDataLogin,
} from "../../interfaces/context.interface";
import Api from "../../services";

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = async ({ children }: IAuthProvider) => {
  const navigate = useNavigate();

  async function createUser(data: ICreateUser) {
    const { name, email, password, age } = data;

    const envUser = { name, email, password, age };
    let message = "";
    await Api.post("users", envUser)
      .then((data: AxiosResponse) => {
        message = data.data.message;
      })
      .catch((error: AxiosResponse) => (message = error.data.message));

    return message;
  }

  async function validateEmail({ tokenEmail }: IParamsValidateEmail) {
    let message = "";
    await Api.patch(`user/email/${tokenEmail}`)
      .then((data: AxiosResponse) => {
        message = data.data.message;
      })
      .catch((error: AxiosResponse) => (message = error.data.message));
    return message;
  }

  async function login(userDataLogin: IUserDataLogin) {
    let message = "";
    await Api.post("session", userDataLogin)
      .then((data: AxiosResponse) => {
        message = data.data.message;
      })
      .catch((error: AxiosResponse) => (message = error.data.message));

    return message;
  }

  async function resendEmail (email: IParamsResendEmail) {
    let message = "";
    await Api.patch("resend", email)
      .then((data: AxiosResponse) => {
        message = data.data.message;
      })
      .catch((error: AxiosResponse) => (message = error.data.message));

    return message;
  }

  return (
    <AuthContext.Provider
      value={{ createUser, validateEmail, login ,resendEmail  }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
