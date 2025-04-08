import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";
import Common from "../utils/Common";
// import defaultProfile from "../assets/defaultProfile.png";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.borderBg};
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled(Section)`
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
`;

const Right = styled(Section)`
  justify-content: flex-end;
  padding-right: 20px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const Nickname = styled.span`
  width: 60px;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 48px;
  right: 0;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 0;
  z-index: 1000;
`;

const DropdownItem = styled.li`
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #f4f4f4;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const isLogin = Common.getAccessToken();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await AxiosApi.memberGetInfo();
        setUserInfo({
          nickname: res.data.nickname,
          profileImageUrl:
            res.data.profileImageUrl || "https://via.placeholder.com/150",
        });
      } catch (err) {
        console.error("❌ 사용자 정보 불러오기 실패", err);
        setUserInfo(null);
      }
    };

    if (isLogin) fetchUserInfo();
  }, [isLogin]);

  const handleLogout = () => {
    Common.clearTokens();
    setUserInfo(null);
    navigate("/");
  };

  return (
    <Container>
      <Section /> {/* 좌측 빈 공간 */}
      <Center onClick={() => navigate("/")}>🧙‍♀️ Prophecy</Center>
      <Right>
        {userInfo && (
          <ProfileSection onClick={() => setIsOpen(!isOpen)}>
            <ProfileImage src={userInfo.profileImageUrl} alt="프로필" />
            <Nickname>{userInfo.nickname}</Nickname>
            {isOpen && (
              <Dropdown>
                <DropdownItem onClick={handleLogout}>로그아웃</DropdownItem>
              </Dropdown>
            )}
          </ProfileSection>
        )}
      </Right>
    </Container>
  );
};

export default Header;
