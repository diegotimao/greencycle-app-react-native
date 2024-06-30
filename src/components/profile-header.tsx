import { Text } from "react-native";
import { Image, View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth";

export default function ProfileHeader() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext não foi fornecido corretamente.');
  };

  const { user } = authContext;

  return (
    <View className="w-full items-center p-2 gap-2">
      <Image source={require('@/assets/avatar-user.jpg')} className="rounded-2xl w-24 h-24 border " />
      <View className="gap-1 items-center">
        <Text className="text-2xl font-bold">{user?.name}</Text>
        <Text className="text-sm font-medium">{user?.email}</Text>
      </View>
    </View>
  )
}