import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useReducer, useRef, useState } from "react";
import UnAuthBackgroundWrapper from "../../../src/components/authBackgroundWrapper";
import { router, useLocalSearchParams } from "expo-router";

const OTPEnterScreen = () => {
  const [OTP, setOTP] = useState<string>("");
  const { email, phone } = useLocalSearchParams();

  const handleOnPressNext = () => {
    if (email) {
      router.push("/signUp/signUpPhone");
    } else {
      router.push("/signUp/signUpUserDetails");
    }
  };
  useEffect(() => {
    if (Number(OTP.length) === 6) {
      console.log("OTP verified!");
    }
  }, [OTP]);
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
          <Text className="text-white py-2">OTP sent to {email || phone}</Text>
          <View className="flex-row justify-between w-[100%] items-center">
            <TextInput
              value={OTP}
              onChangeText={(input) => setOTP(String(input))}
              placeholderTextColor={"#91919F"}
              keyboardType="decimal-pad"
              className="border border-white absolute h-[50px] opacity-0 z-10 w-full"
            />
            {Array.from({ length: 6 }).map((item, index) => {
              return (
                <View
                  key={index}
                  className="border border-white h-8 w-8 bg-transparent"
                >
                  {!OTP[index] ? (
                    <Text className="text-white m-auto">*</Text>
                  ) : (
                    <Text className="text-white m-auto">{OTP[index]}</Text>
                  )}
                </View>
              );
            })}
          </View>
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

export default OTPEnterScreen;
