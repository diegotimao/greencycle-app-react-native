import { Text } from "react-native";
import { Image, View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth";

export default function ProfileHeader() {
  const { name } = useContext(AuthContext);

  return (
    <View className="w-full items-center p-2 gap-2">
      <Image source={require('@/assets/avatar-user.jpg')} className="rounded-full w-24 h-24 border border-gray-500/60 border-spacing-1" />
      <View className="gap-1 items-center">
        <Text className="text-2xl font-bold">{name}</Text>
        <Text className="text-sm font-medium">diegotimao1104@gmail.com</Text>
      </View>
    </View>
  )
}