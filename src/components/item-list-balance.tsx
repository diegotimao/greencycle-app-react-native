import { itemsBalanceDataProps } from "@/utils/items-balance";
import { Text, View } from "react-native";

type itemsProps = {
  data: itemsBalanceDataProps
}

export default function ItemListBalance({data}: itemsProps) {
  return (
    <View className="flex-row justify-between mt-3 items-center">
      <Text className="text-xl text-blue-900 font-normal">{data.nameItem}</Text>
      <View className="flex-row gap-4 justify-between">
        <Text className="text-lg font-semibold">{`kg ${data.kg}`}</Text>
        <Text className="text-lg text-green-800">{`R$ ${data.value}`}</Text>
      </View>
    </View>
  )
}