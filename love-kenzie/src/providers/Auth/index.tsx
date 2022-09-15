import { AxiosResponse } from "axios";
import React, { createContext, useState } from "react";
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

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  function createUser(data: ICreateUser) {
    const { name, email, password, age } = data;

    const envUser = { name, email, password, age };
    Api.post("user", envUser, {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Content-Type": "application/json",
      },
    })
      .then((data: AxiosResponse) => {
        setMessage("Checked");
        console.log(data);
        navigate("/registerfinish");
      })
      .catch((error: AxiosResponse) => {
        setMessage("Error");
        console.log(error);
        navigate("/registerfinish");
      });
    console.log(message);
    return "";
  }

  function validateEmail( tokenEmail : IParamsValidateEmail) {
    Api.patch(`user/email/${tokenEmail}`)
      .then((data: AxiosResponse) => {
        setMessage("Checked");
        console.log(data);
      })
      .catch((error: AxiosResponse) => {
        setMessage("Error");
        console.log(error);
      });
      console.log(tokenEmail)
    return message;
  }

  function login(userDataLogin: IUserDataLogin) {
    Api.post("session", userDataLogin)
      .then((data: AxiosResponse) => {
        setMessage("Checked");
        console.log(data);
      })
      .catch((error: any) => {
        setMessage("Error");
        console.log(error);
      });

    return "";
  }

  function resendEmail(email: IParamsResendEmail) {
    Api.patch("resend", email)
      .then((data: AxiosResponse) => {
        setMessage(data.data.message);
        setToken(data.data?.accessToken);
      })
      .catch((error: AxiosResponse) => setMessage(error.data.message));

    return "";
  }

  return (
    <AuthContext.Provider
      value={{ createUser, validateEmail, login, resendEmail, token, message }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
