import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";
import UnAuthBackgroundWrapper from "../../../../src/components/authBackgroundWrapper";

const SignUpPhone = () => {
  const [phone, setPhone] = useState("");

  const handleOnPressNext = () => {
    if (!phone) {
      alert("Please enter phone number!");
      return;
    }
    router.push({
      pathname: "/otpEnterScreen",
      params: {
        phone: phone,
      },
    });
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

        <View className="gap-0.5 pb-6 pt-4">
          <Text className="font-[12px] font-[Inter] text-white">Phone</Text>
          <TextInput
            placeholder="+91 1234567890"
            placeholderTextColor={"#B3B3B3"}
            className="height-[43px] border border-white p-3 font-[Inter] text-white"
            onChangeText={setPhone}
          />
        </View>

        <View className="mt-4">
          <TouchableOpacity
            onPress={handleOnPressNext}
            className="h-[50px] bg-white items-center justify-center align-center"
          >
            <Text className="font-[Inter]">Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </UnAuthBackgroundWrapper>
  );
};

export default SignUpPhone;
