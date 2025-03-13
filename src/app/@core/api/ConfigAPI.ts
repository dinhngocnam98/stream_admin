import axiosClient from './axiosClient';
import {ConfigData} from '../data/config-header';

const ConfigAPI = {
  getConfig: () => {
    const url = '/config';
    return axiosClient.get(url);
  },
  setConfig: (data: ConfigData) => {
    const url = '/config';
    return axiosClient.post(url, data);
  },
};

export default ConfigAPI;
