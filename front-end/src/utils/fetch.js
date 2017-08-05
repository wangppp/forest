/* eslint-disable */
import axios from 'axios';
import { Message } from 'element-ui';
import store from '../store';
import router from '@/router';
import { getToken } from '@/utils/auth';


// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000                  // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    const newconfig = Object.assign({}, config);
    newconfig.url = 'http://localhost:9000/admin/api' + newconfig.url;
    if (store.getters.token) {
      let token = getToken();
      newconfig.headers["Authorization"] = `Bearer ${token}`; // 让每个请求携带自定义token 请根据实际情况自行修改
      console.log(newconfig);
    }
    return newconfig;
  },
  (error) => {
    // Do something with request error
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  (response) => {

    return response.data;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          Auth.logout()
          router.replace({
              path: 'login',
              query: {redirect: router.currentRoute.fullPath}
          });
          break;
        default:
          Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
          });
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default service;
