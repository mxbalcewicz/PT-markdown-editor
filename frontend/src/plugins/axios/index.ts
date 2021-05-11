import axios from 'axios';
import config from '../../config';

const { api } = config;

const API = axios.create({
  baseURL: `http://${api.hostname}:${api.port}/api`,
});

export default API;
