import React from "react";
import {SafeAreaView, ScrollView, Text, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import ChangeIcon from "@/assets/icons/ChangeIcon";
import ChatIcon from "@/assets/icons/ChatIcon";
// import DangerIcon from "@/assets/icons/DangerIcon";
import NotificationIcon from "@/assets/icons/NotificationIcon";
import ArrowIcon from "@/assets/icons/ArrowIcon";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

const SectionContainer = styled.View`
  padding: 16px;
  margin: 8px 0;
`;

const SectionTitle = styled.Text`
  font-size: ${({theme}) => theme.fonts.p3.fontSize}px;
  font-family: ${({theme}) => theme.fonts.p3.fontFamily};
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 8px;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-top-width: 1px;
  border-top-color: ${({theme}) => theme.colors.n2};
`;

const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const ItemText = styled.Text`
  font-size: ${({theme}) => theme.fonts.p2.fontSize}px;
  font-family: ${({theme}) => theme.fonts.p2.fontFamily};
  color: ${({theme}) => theme.colors.text};
`;

const ArrowContainer = styled.View``;

const SettingsScreen = () => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleChangeConnectedAccounts = () => {
    console.log("Change connected accounts clicked");
  };

  const handleAdjustPushNotifications = () => {
    console.log("Adjust push notifications clicked");
  };

  const handleSendFeedback = () => {
    console.log("Send feedback clicked");
  };

  return (
    <Container>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{flex: 1}}>
        <SectionContainer>
          <SectionTitle>계정</SectionTitle>
          <TouchableOpacity onPress={handleChangeConnectedAccounts}>
            <ItemContainer>
              <LeftContainer>
                <ChangeIcon width={16} height={16} />
                <ItemText>계정 설정하기</ItemText>
              </LeftContainer>
              <ArrowContainer>
                <ArrowIcon width={16} height={16} />
              </ArrowContainer>
            </ItemContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAdjustPushNotifications}>
            <ItemContainer>
              <LeftContainer>
                <NotificationIcon width={16} height={16} />
                <ItemText>푸시 알림 맞추기</ItemText>
              </LeftContainer>
              <ArrowContainer>
                <ArrowIcon width={16} height={16} />
              </ArrowContainer>
            </ItemContainer>
          </TouchableOpacity>
        </SectionContainer>
        <SectionContainer>
          <SectionTitle>고객 지원</SectionTitle>
          <TouchableOpacity onPress={handleSendFeedback}>
            <ItemContainer>
              <LeftContainer>
                <ChatIcon width={16} height={16} />
                <ItemText>건의하기</ItemText>
              </LeftContainer>
              <ArrowContainer>
                <ArrowIcon width={16} height={16} />
              </ArrowContainer>
            </ItemContainer>
          </TouchableOpacity>
        </SectionContainer>
      </ScrollView>
    </Container>
  );
};

export default SettingsScreen;
