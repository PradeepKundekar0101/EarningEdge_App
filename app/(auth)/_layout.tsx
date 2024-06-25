import { Redirect, Stack } from "expo-router";
import React from "react";
import {
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";

const AuthLayout = () => {
  const isAuthenticated = false;
  if (isAuthenticated) {
    return <Redirect href={"/home"} />;
  }
  return (
    <SafeAreaView className="flex-1">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={"onboarding/index"}
          options={{
            headerShown: false,
            title: "Onboarding",
            header: () => null,
          }}
        />
        <Stack.Screen
          name={"signIn/index"}
          options={{
            headerShown: false,
            title: "Sign In",
            header: () => null,
          }}
        />
        <Stack.Screen
          name={"signUp/index"}
          options={{
            headerShown: false,
            title: "Sign Up",
            header: () => null,
          }}
        />
      </Stack>
    </SafeAreaView>
  );
};

export default AuthLayout;
