import React from "react";
import styled from "styled-components";
import FeedCard from "../components/FeedCard";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.3s ease-in-out;
`;

const FeedWrapper = styled.div`
  width: 650px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #a9a9b6;
`;

const FeedPage = () => {
  const dummyFeed = [
    {
      writer: "백승재",
      content: "내일은 6시에 기상하겠습니다.",
      createdAt: "2시간 전",
      status: "progress",
    },
    {
      writer: "catsh_21",
      content: "점심 이후 2시간 집중 공부 예언!",
      createdAt: "1일 전",
      status: "success",
    },
  ];

  return (
    <Container>
      <FeedWrapper>
        {dummyFeed.map((item, idx) => (
          <FeedCard key={idx} {...item} />
        ))}
      </FeedWrapper>
    </Container>
  );
};

export default FeedPage;
