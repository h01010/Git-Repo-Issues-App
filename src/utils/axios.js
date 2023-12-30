import axios from 'axios';
// import USER_TOKEN from '';

const BASEURL = 'https://api.github.com';
const USER_TOKEN = `${process.env.REACT_APP_USER_TOKEN}`;

const axiosInstance = axios.create({
  baseURL: BASEURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (USER_TOKEN) {
      config.headers.Authorization = `token ${USER_TOKEN}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
