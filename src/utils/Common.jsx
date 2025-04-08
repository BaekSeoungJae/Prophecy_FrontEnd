// src/utils/Common.jsx
import moment from "moment";
import axios from "axios";
import "moment/locale/ko";
moment.locale("ko");

const Common = {
  // ProPhecy 기본 URL 및 소켓 URL
  PP_DOMAIN: "http://localhost:8111",
  PP_SOCKET_URL: "ws://localhost:8111/ws/chat",

  //로그인 상태관리
  isLoggedIn: () => {
    const token =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");
    return !!token;
  },

  // 날짜 관련 유틸 함수
  timeFromNow: (timestamp) => {
    return moment(timestamp).fromNow();
  },
  formatDate: (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hour = ("0" + date.getHours()).slice(-2);
    const minute = ("0" + date.getMinutes()).slice(-2);
    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
  },

  // 토큰 관리
  getAccessToken: () => {
    return localStorage.getItem("accessToken");
  },
  setAccessToken: (token) => {
    localStorage.setItem("accessToken", token);
  },
  getRefreshToken: () => {
    return localStorage.getItem("refreshToken");
  },
  setRefreshToken: (token) => {
    localStorage.setItem("refreshToken", token);
  },

  // 401 에러 발생 시 토큰 재발급 처리 (백엔드의 /auth/refresh 엔드포인트에 맞춰 수정)
  handleUnauthorized: async () => {
    console.log("handleUnauthorized");
    const refreshToken = Common.getRefreshToken();
    // refreshToken을 헤더에 담아 보내는 예시입니다.
    const config = {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    };
    try {
      const res = await axios.post(
        `${Common.PP_DOMAIN}/auth/refresh`,
        {},
        config
      );
      console.log("refresh response:", res.data);
      Common.setAccessToken(res.data.accessToken);
      return true;
    } catch (err) {
      console.error("토큰 재발급 실패:", err);
      return false;
    }
  },
};

export default Common;
