
import { ScrollView, View,Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className=" bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center items-center px-4">
          <Text className="text-white">
            Earning Edge
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}