import axios from "axios";
import { API_CONFIG } from "../config/config.js";

//^  Create Axios Instance
export const apiGDG = axios.create({
  baseURL: API_CONFIG.baseURL, 
  timeout: 10000, //^  Request timeout
});

//^  Response Interceptor
apiGDG.interceptors.response.use(
  (response) => {
    //^  Successful response wrapper
    return Promise.resolve({
      success: true,
      data: response.data,
    });
  },  
  (error) => {
    //^  Error response wrapper
    return Promise.reject({
      success: false,
      error: error,
      message: error.response?.data?.message || "Unknown error",
    });
  }
);



apiGDG.interceptors.request.use((config) => {
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");

  if (token) {
    config.headers.token = token;
  }
  return config;
});
