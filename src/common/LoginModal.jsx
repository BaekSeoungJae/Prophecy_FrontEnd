// src/components/LoginModal.jsx
import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";
import Common from "../utils/Common";

const zoomIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  background-color: white;
  border-radius: 16px;
  padding: 30px 20px;
  text-align: center;
  z-index: 1100;
  animation: ${zoomIn} 0.3s ease;

  @media (max-width: 768px) {
    animation: ${fadeSlideUp} 0.3s ease;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const KakaoButton = styled.button`
  background-color: #fee500;
  border: none;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: bold;
  color: #3c1e1e;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 14px;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: #999;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("c76da9fe266310f957e06d4e037e13e0");
      console.log("✅ Kakao SDK Initialized (from modal)");
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
              Common.setAccessToken(token);
              onClose(); // 모달 닫기
              navigate("/");
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
    <>
      <ModalBackground onClick={onClose} />
      <ModalBox>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>로그인이 필요합니다</Title>
        <KakaoButton onClick={handleKakaoLogin}>
          카카오로 로그인하기
        </KakaoButton>
      </ModalBox>
    </>
  );
};

export default LoginModal;
