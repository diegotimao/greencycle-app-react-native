import { AlignLeft, BellDot, ChevronRight } from "lucide-react-native";
import { View, Text } from "react-native";

export default function Header() {
  return (
    <View className="mt-6 p-5 h-60 w-full bg-green-900 justify-between">
      <View className="flex-row justify-between">
        <AlignLeft color={"#ffffff"} size={35}/>
        <View className="h-10 w-10 items-center justify-center rounded-full bg-green-700">
          <BellDot color={"#ffffff"} />
        </View>
      </View>

      <View className="flex-row justify-between mb-12">
        <View className="gap-2">
          <Text className="font-medium text-2xl text-white">13 kg</Text>
          <Text className="text-white">Total reciclado</Text>
        </View>

        <View className="gap-2 items-end justify-end">
          <Text className="font-medium text-2xl text-white">R$ 21,60</Text>
          <View className="flex-row items-center justify-end">
            <Text className="text-white">Saldo disponível</Text>
            <ChevronRight color={`#ffffff`} />
          </View>
        </View>
      </View>
    </View>
  )
}
