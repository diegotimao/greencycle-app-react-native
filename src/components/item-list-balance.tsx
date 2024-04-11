import { itemsBalanceDataProps } from "@/utils/items-balance";
import { Text, View } from "react-native";

type itemsProps = {
  data: itemsBalanceDataProps
}

export default function ItemListBalance({data}: itemsProps) {
  return (
    <View className="flex-row justify-between mt-2 items-center">
      <Text className="text-base text-blue-900 font-semibold">{data.nameItem}</Text>
      <View className="flex-row gap-4 justify-between">
        <Text className="text-base font-semibold">{`kg ${data.kg}`}</Text>
        <Text className="text-base text-green-800">{`R$ ${data.value}`}</Text>
      </View>
    </View>
  )
}