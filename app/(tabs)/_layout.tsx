import { Text, View } from "react-native";
import React, { Component } from "react";
import { Redirect } from "expo-router";

const TabsLayout = () => {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return <Redirect href={"/onboarding"} />;
  }
  return (
    <View>
      <Text>TabsLayout</Text>
    </View>
  );
};

export default TabsLayout;
