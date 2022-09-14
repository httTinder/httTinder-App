import axios from "axios";

export interface IAxiosError {
  message: string;
  status: string;
}

const Api = axios.create({
  baseURL: "https://htttinder-api.herokuapp.com/",
  timeout: 0,
});

export default Api;