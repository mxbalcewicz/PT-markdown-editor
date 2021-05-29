import axios from 'axios';
import config from 'config';
import { HttpStatusCode } from 'types/http';
import Paths from 'router/paths';

const { api } = config;

const http = axios.create({
  baseURL: `${api.hostname}:${api.port}/api`,
  withCredentials: true,
});

export const setAuthHeaders = (accessToken: string | null) => {
  if (accessToken) {
    http.defaults.headers.Authorization = `Bearer ${accessToken}`;
  } else {
    delete http.defaults.headers.Authorization;
  }
};

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === HttpStatusCode.Unauthorized &&
      window.location.pathname !== Paths.Login
    ) {
      window.location.replace(Paths.Login);
    }

    return Promise.reject(error);
  },
);

export default http;
