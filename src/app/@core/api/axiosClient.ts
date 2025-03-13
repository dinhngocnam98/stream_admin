import axios from 'axios';
import {environment} from '../../../environments/environment';
import querystring from 'query-string';

const axiosClient = axios.create({
  baseURL: environment.javaUrl,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => querystring.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
}, (error) => {
  throw error;
});

export default axiosClient;
