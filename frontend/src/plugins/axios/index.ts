import axios from 'axios';
import config from '../../config';

const { api } = config;

const API = axios.create({
  baseURL: `http://${api.hostname}:${api.port}`,
});

API.interceptors.request.use((config) => {
  const token = '';

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;
