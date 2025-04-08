// src/api/AxiosApi.js
import AxiosInstance from "./AxiosInstance";

const AxiosApi = {
  // 소셜 로그인 (카카오 등)
  socialLogin: async (oauthProvider, oauthId, nickname, profileImageUrl) => {
    const payload = { oauthProvider, oauthId, nickname, profileImageUrl };
    return await AxiosInstance.post("/api/auth/oauth", payload);
  },

  // 사용자 정보 조회 (예: 마이페이지)
  getUserInfo: async () => {
    return await AxiosInstance.get("/api/users/info");
  },

  // 예언 리스트 조회 (페이지네이션 지원)
  getProphecies: async (page = 0, size = 10) => {
    return await AxiosInstance.get(`/api/prophecies?page=${page}&size=${size}`);
  },

  // 예언 등록
  postProphecy: async (prophecyData) => {
    return await AxiosInstance.post("/api/prophecies", prophecyData);
  },

  // 채팅방 리스트 조회 (필요 시)
  getChatList: async () => {
    return await AxiosInstance.get("/api/chat/list");
  },

  // 다른 API 함수들도 필요에 따라 추가...
};

export default AxiosApi;
