import { Redirect } from "expo-router";
import { ScrollView, View, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import * as Font from "expo-font";
import { useEffect } from "react";
export default function App() {
  let [fontsLoaded, fontError] = Font.useFonts({
    Inter: require("../src/fonts/inter/Inter.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Redirect href={"/home"} />
    // <SafeAreaView className=" bg-black h-full">
    //   <ScrollView contentContainerStyle={{ height: "100%" }}>
    //     <View className="w-full h-full justify-center items-center px-4">
    //       <Text className="text-white">
    //         Earning Edge
    //       </Text>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
}
