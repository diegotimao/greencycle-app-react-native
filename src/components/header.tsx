import { BellDot, ChevronRight } from "lucide-react-native";
import { View, Text } from "react-native";
import MenuButton from "./menu-button";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/auth";

export default function Header() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext não foi fornecido corretamente.');
  };

  const { conta } = authContext;

  return (
    <View className={`mt-6 p-5 h-60 w-full bg-green-900 justify-between`}>
      <View className="flex-row justify-between items-center">
        <MenuButton />
        <View className="h-12 w-12 items-center justify-center rounded-full bg-green-800/80">
          <BellDot color={"#ffffff"} />
        </View>
      </View>

      <View className={`flex-row justify-between mb-12`}>
        <View className="gap-2">
          <Text className="font-medium text-2xl text-white">{conta?.quilos}</Text>
          <Text className="text-white">Total reciclado</Text>
        </View>

        <View className="gap-2 items-end justify-end">
          <Text className="font-medium text-2xl text-white">{conta?.points}</Text>
          <View className="flex-row items-center justify-end">
            <Text className="text-white">Pontos</Text>
            <ChevronRight color={`#ffffff`} />
          </View>
        </View>
      </View>
    </View>
  )
}
