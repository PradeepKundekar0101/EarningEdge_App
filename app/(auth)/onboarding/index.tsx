import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Onboarding = () => {
  return (
    <View className="bg-black flex-1">
      <Link href={"/signUp"} className="h-10 bg-red-50 mt-4 mx-4 text-center ">
        Create An Account
      </Link>
      <Link href={"/signIn"} className="h-10 bg-red-100 mt-4 mx-4 text-center">
        Login
      </Link>
    </View>
  );
};

export default Onboarding;
