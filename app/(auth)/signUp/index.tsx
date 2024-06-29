import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import UnAuthBackgroundWrapper from "../../../src/components/authBackgroundWrapper";
import { router } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
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

        <View className="gap-0.5 pb-6 pt-4">
          <Text className="font-[12px] font-[Inter] text-white">Email</Text>
          <TextInput
            placeholder="name@company.com"
            placeholderTextColor={"#B3B3B3"}
            className="height-[43px] border border-white p-3 font-[Inter] text-white"
            onChangeText={setEmail}
          />
        </View>

        <View className="mt-4">
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/otpEnterScreen",
                params: {
                  email: email,
                },
              })
            }
            className="h-[50px] bg-white items-center justify-center align-center"
          >
            <Text className="font-[Inter]">Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </UnAuthBackgroundWrapper>
  );
};

export default SignUp;
