import React, {useEffect, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createStackNavigator} from "@react-navigation/stack";
import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/Login/Intro";
import MainScreen from "./src/navigation/AppNavigator";
import {ThemeProvider} from "styled-components/native";
import {lightTheme} from "./src/styles/theme";
import {NavigationContainer} from "@react-navigation/native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {useAuthStore} from "./src/context/authStore";
import useStore from "./src/context";

const App = () => {
  const queryClient = new QueryClient();
  const Stack = createStackNavigator();
  const {isAuthenticated, checkAuthStatus, bedtimeExists, userProfile} =
    useAuthStore();
  const {fetchAllTasks, fetchCategories} = useStore(state => ({
    fetchAllTasks: state.fetchAllTasks,
    fetchCategories: state.fetchCategories,
  }));
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      await checkAuthStatus();
      setIsCheckingAuth(false);
    };

    initializeAuth();
  }, [checkAuthStatus]);

  useEffect(() => {
    if (isAuthenticated && userProfile) {
      fetchAllTasks(userProfile.id);
      fetchCategories(userProfile.id, new Date());
    }
  }, [isAuthenticated, fetchAllTasks, fetchCategories, userProfile]);

  if (isCheckingAuth) {
    return (
      <ThemeProvider theme={lightTheme}>
        <GestureHandlerRootView>
          <SplashScreen />
        </GestureHandlerRootView>
      </ThemeProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <NavigationContainer>
          <GestureHandlerRootView>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              {!isAuthenticated ? (
                <Stack.Screen name="Login" component={LoginScreen} />
              ) : bedtimeExists ? (
                <Stack.Screen name="Main" component={MainScreen} />
              ) : (
                <Stack.Screen name="Splash" component={SplashScreen} />
              )}
            </Stack.Navigator>
          </GestureHandlerRootView>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
