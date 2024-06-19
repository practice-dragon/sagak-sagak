import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import {ThemeProvider} from "styled-components/native";
import HomeScreen from "@/screens/HomeScreen";
import TodayScreen from "@/screens/TodayScreen";
import CustomScreen from "@/screens/CustomScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import {RootTabParamList} from "@/types/route";

import CalendarIcon from "@/assets/icons/CalendarIcon";
import ChecklistIcon from "@/assets/icons/ChecklistIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import HeartIcon from "@/assets/icons/HeartIcon";
import ActiveCalendarIcon from "@/assets/icons/ActiveCalendarIcon";
import ActiveChecklistIcon from "@/assets/icons/ActiveChecklistIcon";
import ActiveSettingsIcon from "@/assets/icons/ActiveSettingsIcon";
import ActiveHeartIcon from "@/assets/icons/ActiveHeartIcon";
import {lightTheme} from "@/styles/theme";

const Tab = createBottomTabNavigator<RootTabParamList>();

const getTabBarIcon = (
  routeName: string,
  focused: boolean,
): React.ReactNode => {
  let IconComponent = focused ? ActiveCalendarIcon : CalendarIcon;
  if (routeName === "달력") {
    IconComponent = focused ? ActiveCalendarIcon : CalendarIcon;
  } else if (routeName === "오늘 할 일") {
    IconComponent = focused ? ActiveChecklistIcon : ChecklistIcon;
  } else if (routeName === "커스텀") {
    IconComponent = focused ? ActiveHeartIcon : HeartIcon;
  } else if (routeName === "설정") {
    IconComponent = focused ? ActiveSettingsIcon : SettingsIcon;
  }
  return <IconComponent />;
};

const AppNavigator = () => {
  const theme = lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}: BottomTabScreenProps<RootTabParamList>) => ({
            tabBarIcon: ({color, size, focused}) =>
              getTabBarIcon(route.name, focused),
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.text,
            tabBarStyle: {
              paddingBottom: 5,
              height: 60,
            },
            tabBarLabelStyle: {
              fontFamily: theme.fonts.Regular,
              fontSize: 12,
            },
            tabBarIconStyle: {},
          })}>
          <Tab.Screen name="달력" component={HomeScreen} />
          <Tab.Screen name="오늘 할 일" component={TodayScreen} />
          <Tab.Screen name="커스텀" component={CustomScreen} />
          <Tab.Screen name="설정" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppNavigator;
