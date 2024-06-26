import { Link, router } from "expo-router";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IMAGES } from "../../../src/constants/images";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../../../src/components/Button";

const Onboarding = () => {
  return (
    <View className="bg-black flex-1 ">
      <ImageBackground
        source={require("../../../assets/backgroundImage.png")}
        resizeMode="cover"
        resizeMethod="scale"
        className="flex-1"
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.85)"]}
          className="absolute w-[100%] h-[100%]"
          locations={[0, 0]}
        />
        <View className="mx-[36px]">
          <View className="mt-[419px]">
            <Text className="text-[40px] font-normal font-[Inter] leading-[50px] text-white">
              Welcome to
            </Text>
            <Text className="text-[40px] font-bold font-[Inter] leading-[50px] text-white">
              Earning Edge
            </Text>
            <Text className="text-[12px] mt-2 font-normal font-[Inter] leading-[16px] text-white text-justify">
              Earning Edge is trading platform designed and developed to assist
              traders
            </Text>
          </View>
          <View className="gap-[32px] mt-1">
            <TouchableOpacity
              onPress={() => router.push("/signUp")}
              className="h-[50px] border border-white items-center justify-center align-center"
            >
              <Text className="text-white font-[Inter]">Create An Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/signIn")}
              className="h-[50px] bg-white items-center justify-center align-center"
            >
              <Text className="font-[Inter]">LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Onboarding;
