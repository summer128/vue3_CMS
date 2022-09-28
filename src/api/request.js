import axios from "axios";
import { ElMessage } from "element-plus";
import {} from "vue";

const instance = axios.create({
  baseURL: "/api",
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 獲取用戶信息
    const userToken = JSON.parse(localStorage.getItem("userMsg"));
    if (userToken) {
      config.headers["cms-token"] = userToken["cms-token"];
    } else {
      return config;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // console.log(response, response.data.errCode === 1, "响应数据");
    if (response.data.errCode === 1) {
      ElMessage.error(response.data.message);
    }
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
