// src/pages/LoginPage.jsx
import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";
import Common from "../../utils/Common";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 10px 10px;
  background-color: ${({ theme }) => theme.background};
`;

const TopSection = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoPlaceholder = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ddd;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #fee500;
  color: #3c1e1e;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin: 10px 0;
  width: 220px;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: #eee;
    color: #aaa;
    cursor: default;
  }
`;

const Footer = styled.div`
  font-size: 8px;
  color: #888;
  text-align: center;

  a {
    margin: 0 8px;
    color: #666;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
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
      success: function () {
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: async function (res) {
            const profile = res.kakao_account.profile;

            const payload = {
              oauthProvider: "kakao",
              oauthId: res.id.toString(),
              nickname: profile.nickname,
              profileImageUrl: profile.profile_image_url,
            };

            try {
              const response = await AxiosApi.socialLogin(
                payload.oauthProvider,
                payload.oauthId,
                payload.nickname,
                payload.profileImageUrl
              );
              const token = response.data.token;
              Common.setAccessToken(token); // 저장
              navigate("/"); // 홈으로 이동
            } catch (err) {
              console.error("❌ 백엔드 오류:", err);
            }
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
      <TopSection>
        <LogoPlaceholder /> {/* 로고 자리 */}
        <Title>Prophecy</Title>
        <Button onClick={handleKakaoLogin}>카카오로 로그인하기</Button>
        <Button disabled>구글로 로그인하기</Button>
        <Button disabled>네이버로 로그인하기</Button>
      </TopSection>

      <Footer>
        © 2025 Prophecy |<a href="/">이용약관</a>|
        <a href="/">개인정보처리방침</a>|<a href="/">쿠키 정책</a>|
        <a href="/">문제 신고</a>
      </Footer>
    </Container>
  );
};

export default LoginPage;
