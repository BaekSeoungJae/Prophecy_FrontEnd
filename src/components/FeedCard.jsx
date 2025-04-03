import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease-in-out;
`;

const UserInfo = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.otherText};
  margin-bottom: 10px;
`;

const Content = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 12px;
`;

const Footer = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.otherText};
  display: flex;
  justify-content: space-between;
`;

const FeedCard = ({ writer, content, createdAt, status }) => {
  return (
    <Card>
      <UserInfo>
        {writer} · {createdAt}
      </UserInfo>
      <Content>{content}</Content>
      <Footer>
        <span>{status === "success" ? "✅ 도전 성공" : "🔥 도전 중"}</span>
        <span>💬 0 ❤️ 0</span>
      </Footer>
    </Card>
  );
};

export default FeedCard;
