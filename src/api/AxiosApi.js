// src/api/AxiosApi.js
import AxiosInstance from "./AxiosInstance";

const AxiosApi = {
  // 소셜 로그인 (카카오 등)
  socialLogin: async (oauthProvider, oauthId, nickname, profileImageUrl) => {
    const payload = { oauthProvider, oauthId, nickname, profileImageUrl };
    return await AxiosInstance.post("/api/auth/oauth", payload);
  },
  // src/api/AxiosApi.js
  memberGetInfo: async () => {
    return await AxiosInstance.get("/api/users/info");
  },
};

export default AxiosApi;
