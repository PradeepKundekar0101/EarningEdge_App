import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import UnAuthBackgroundWrapper from "../../../src/components/authBackgroundWrapper";
import { router } from "expo-router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <UnAuthBackgroundWrapper>
      <View>
        <View className="mt-[419px]">
          <Text className="text-[40px] font-bold font-[Inter] leading-[50px] text-white">
            Login
          </Text>
        </View>
        <View className="gap-[10px]">
          <View>
            <Text className="font-[12px] font-[Inter] text-white">Email</Text>
            <TextInput
              placeholder="name@company.com"
              placeholderTextColor={"#B3B3B3"}
              className="height-[43px] border border-white p-3"
            />
          </View>
          <View>
            <Text className="font-[12px] font-[Inter] text-white">
              Password
            </Text>
            <TextInput
              placeholder="********"
              placeholderTextColor={"#B3B3B3"}
              className="height-[43px] border border-white p-3"
            />
          </View>
        </View>
        <View className="flex-row justify-between my-[10px]">
          <Text className="font-[12px] font-[Inter] text-white">
            Create An Account
          </Text>
          <Text className="font-[12px] font-[Inter] text-white">
            Forgot Password?
          </Text>
        </View>
        <View className="mt-1">
          <TouchableOpacity
            // onPress={() => router.push("/signIn")}
            className="h-[50px] bg-white items-center justify-center align-center"
          >
            <Text className="font-[Inter]">LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </UnAuthBackgroundWrapper>
  );
};

export default SignIn;
