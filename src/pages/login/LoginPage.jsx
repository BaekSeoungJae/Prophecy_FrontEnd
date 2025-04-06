// src/pages/LoginPage.jsx
import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
`;

const Logo = styled.h1`
  font-size: 32px;
  margin-bottom: 40px;
`;

const KakaoButton = styled.button`
  background-color: #fee500;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: #3c1e1e;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("c76da9fe266310f957e06d4e037e13e0");
      console.log("✅ Kakao SDK Initialized");
    }
  }, []);

  const handleKakaoLogin = () => {
    window.Kakao.Auth.login({
      scope: "profile_nickname, profile_image",
      success: function (authObj) {
        console.log("✅ 로그인 성공!", authObj);

        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function (res) {
            const kakaoAccount = res.kakao_account;
            const profile = kakaoAccount.profile;

            const payload = {
              oauthProvider: "kakao",
              oauthId: res.id.toString(),
              nickname: profile.nickname,
              profileImageUrl: profile.profile_image_url,
            };

            axios
              .post("http://localhost:8111/api/auth/oauth", payload)
              .then((res) => {
                const token = res.data.token;
                localStorage.setItem("token", token); // 저장
                navigate("/"); // 홈으로 이동
              })
              .catch((err) => {
                console.error("❌ 백엔드 오류:", err);
              });
          },
          fail: function (error) {
            console.error("사용자 정보 요청 실패", error);
          },
        });
      },
      fail: function (err) {
        console.error("❌ 로그인 실패", err);
      },
    });
  };

  return (
    <Container>
      <Logo>🧙‍♀️ Prophecy</Logo>
      <KakaoButton onClick={handleKakaoLogin}>카카오로 로그인하기</KakaoButton>
    </Container>
  );
};

export default LoginPage;
