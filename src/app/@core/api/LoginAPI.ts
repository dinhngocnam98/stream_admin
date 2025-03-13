import axiosClient from './axiosClient';

const LoginAPI = {
  login: (user: { email: string, password: string}) => {
    const url = '/login';
    return axiosClient.post(url, user);
  },
  getUser: (data: any) => {
    const url = '/user';
    return axiosClient.post(url, data);
  },
};

export default LoginAPI;
