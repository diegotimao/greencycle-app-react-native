import { BellDot, ChevronRight } from "lucide-react-native";
import { View, Text } from "react-native";
import MenuButton from "./menu-button";
import { useRoute } from "@react-navigation/native";

export default function Header() {
  const route = useRoute();
  const pathName = route.name;

  return (
    <View className={`mt-6 p-5 ${pathName === 'cupons' ? 'h-52' : 'h-60'} w-full bg-green-900 justify-between`}>
      <View className="flex-row justify-between items-center">
        <MenuButton/>
        <View className="h-12 w-12 items-center justify-center rounded-full bg-green-800/80">
          <BellDot color={"#ffffff"} />
        </View>
      </View>

      <View className={`flex-row justify-between mb-12 ${pathName === 'cupons' ? 'mb-2' : 'mb-12'}`}>
        <View className="gap-2">
          <Text className="font-medium text-2xl text-white">13 kg</Text>
          <Text className="text-white">Total reciclado</Text>
        </View>

        <View className="gap-2 items-end justify-end">
          <Text className="font-medium text-2xl text-white">20</Text>
          <View className="flex-row items-center justify-end">
            <Text className="text-white">Saldo disponível</Text>
            <ChevronRight color={`#ffffff`} />
          </View>
        </View>
      </View>
    </View>
  )
}
