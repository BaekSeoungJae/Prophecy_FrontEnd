// src/api/AxiosInstance.js
import axios from "axios";
import Common from "../utils/Common";

const AxiosInstance = axios.create({
  baseURL: Common.PP_DOMAIN,
});

// 요청 인터셉터: 모든 요청에 Access Token 자동 추가
AxiosInstance.interceptors.request.use(
  async (config) => {
    const token = Common.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터: 401 에러 발생 시 토큰 재발급 후 원래 요청 재시도
AxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const isRefreshed = await Common.handleUnauthorized();
      if (isRefreshed) {
        error.config.headers.Authorization = `Bearer ${Common.getAccessToken()}`;
        return axios.request(error.config);
      }
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
