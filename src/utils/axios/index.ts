import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com/',
  timeout: 5000,
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  }
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  },
);

export default axiosInstance;

