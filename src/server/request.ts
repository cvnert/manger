import axios from "axios";

const instance = axios.create({
  baseURL: "localhost:3000",
  timeout: 5000,
  withCredentials: true,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // config.headers.token = getToken();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
// get请求
export const get = (url: string, params: any) => instance.get(url, { params });
// post请求
export const post = (url: string, data: any) => instance.post(url, data);
// put请求
export const put = (url: string, data: any) => instance.put(url, data);
// del请求
export const del = (url: string, data: any) => instance.delete(url, data);
