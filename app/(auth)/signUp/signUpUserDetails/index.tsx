import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";
import UnAuthBackgroundWrapper from "../../../../src/components/authBackgroundWrapper";

const SignUpUserDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnPressCreateAccount = () => {
    alert("Account Created!");
  };
  return (
    <UnAuthBackgroundWrapper>
      <View>
        <View className="">
          <Text className="text-[40px] font-normal font-[Inter] leading-[50px] text-white">
            Create an
          </Text>
          <Text className="text-[40px] font-bold font-[Inter] leading-[50px] text-white">
            Account
          </Text>
        </View>
        <View>
          <View className="gap-0.5 pb-6 ">
            <Text className="font-[12px] font-[Inter] text-white">
              First Name
            </Text>
            <TextInput
              placeholder="John"
              placeholderTextColor={"#B3B3B3"}
              className="height-[43px] border border-white p-3 font-[Inter] text-white"
              onChangeText={setFirstName}
            />
          </View>
          <View className="gap-0.5 pb-6 ">
            <Text className="font-[12px] font-[Inter] text-white">
              Last Name
            </Text>
            <TextInput
              placeholder="Smith"
              placeholderTextColor={"#B3B3B3"}
              className="height-[43px] border border-white p-3 font-[Inter] text-white"
              onChangeText={setLastName}
            />
          </View>
          <View className="gap-0.5 pb-6">
            <Text className="font-[12px] font-[Inter] text-white">
              Password
            </Text>
            <TextInput
              placeholder="********"
              placeholderTextColor={"#B3B3B3"}
              className="height-[43px] border border-white p-3 font-[Inter] text-white"
              onChangeText={setPassword}
            />
          </View>
          <View className="gap-0.5 pb-6 ">
            <Text className="font-[12px] font-[Inter] text-white">
              Confirm Password
            </Text>
            <TextInput
              placeholder="********"
              placeholderTextColor={"#B3B3B3"}
              className="height-[43px] border border-white p-3 font-[Inter] text-white"
              onChangeText={setConfirmPassword}
            />
          </View>
        </View>

        <View className="mt-4">
          <TouchableOpacity
            onPress={handleOnPressCreateAccount}
            className="h-[50px] bg-white items-center justify-center align-center"
          >
            <Text className="font-[Inter]">Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </UnAuthBackgroundWrapper>
  );
};

export default SignUpUserDetails;
