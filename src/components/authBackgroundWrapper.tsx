import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { IMAGES } from "../constants/images";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const UnAuthBackgroundWrapper = ({ children, canGoBack = true }) => {
  return (
    <View className="bg-black flex-1 ">
      <ImageBackground source={IMAGES.BACKGROUND_IMAGE} className="flex-1">
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)"]}
          className="absolute w-[100%] h-[100%]"
          locations={[0, 0]}
        />
        {canGoBack && (
          <View className="mx-[36px] mt-[50px] absolute">
            <AntDesign
              name="left"
              size={25}
              color="white"
              onPress={() => router.back()}
            />
          </View>
        )}
        <View className="absolute w-[100%] bottom-[82px]">
          <View className="px-9">{children}</View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default UnAuthBackgroundWrapper;
