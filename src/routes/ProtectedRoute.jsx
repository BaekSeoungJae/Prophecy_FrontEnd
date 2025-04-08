// src/routes/ProtectedRoute.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`;

const LoginButton = styled.button`
  background-color: #fee500;
  color: #3c1e1e;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.9;
  }
`;

const ProtectedRoute = ({ children }) => {
  const token =
    sessionStorage.getItem("accessToken") ||
    localStorage.getItem("accessToken");

  const navigate = useNavigate();

  if (!token) {
    return (
      <Wrapper>
        <Title>Prophecy에 오신 걸 환영합니다 👋</Title>
        <Description>
          이곳은 계획을 예언처럼 기록하고, 피드에 공유하고,
          <br />
          실천하는 즐거움을 주는 새로운 SNS 스케줄러입니다.
        </Description>
        <LoginButton onClick={() => navigate("/login")}>
          로그인하러 가기
        </LoginButton>
      </Wrapper>
    );
  }

  return children;
};

export default ProtectedRoute;
