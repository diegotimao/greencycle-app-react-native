import { MoveRight } from "lucide-react-native";
import { useState } from "react";
import { SafeAreaView, View, Text, Pressable, Linking } from "react-native";
import Animated from "react-native-reanimated";
import tutorialData from "@/utils/tutorial";
import { Redirect, useRouter, usePathname } from 'expo-router';

export default function TutorialScreen() {
  const [page, setPage] = useState(0);

  const router = useRouter();
  console.log(usePathname())
  const nextToPage = () => {
  
    if (page === 2) {
      console.log('Cheguei no 2');
      setPage(0);
      return router.push('/');
    } else {
      setPage(page + 1);
    }
  }

  return (
    <SafeAreaView className="mt-7 flex-1">
      <View className="flex-1">
        <View className="flex-1 w-full bg-green-800">
          <Animated.Image
            source={tutorialData[page].url}
            className="w-full h-full"
          />
        </View>
        <View className="gap-5 p-6">
          <Text className="text-3xl font-semibold">{tutorialData[page].title}</Text>
          <Text className="text-xl text-justify">{tutorialData[page].subtitle}</Text>

          <View className="flex-row justify-between items-end mt-14">
            <View className="flex-row gap-1">
              <View className={`h-2 ${page === 0 ? 'w-5 bg-green-900' : 'w-3 h-2 bg-green-200'} rounded-full`}></View>
              <View className={`h-2 ${page === 1 ? 'w-5 bg-green-900' : 'w-3 h-2 bg-green-200'} rounded-full`}></View>
              <View className={`h-2 ${page === 2 ? 'w-5 bg-green-900' : 'w-3 h-2 bg-green-200'} rounded-full`}></View>
            </View>
            <Pressable
              onPress={nextToPage}
              className="w-16 h-16 rounded-full bg-green-900 items-center justify-center">
              <MoveRight color={'white'} />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
