import { FlatList, Text, View } from "react-native";
import ItemListBalance from "./item-list-balance";
import { itemsBalance } from "@/utils/items-balance";

export default function Balance() {
  return (
    <View className="w-full h-24 p-5">
      <View className="bg-white w-full h-['300px'] mt-[-50] rounded-xl p-5">
        <View className="gap-2 mb-6">
          <Text className="text-blue-900 font-bold text-xl">Meu balanço de Outubro</Text>
          <Text className="text-blue-900 font-semibold text-3xl ">R$ 21,60</Text>
        </View>
        <FlatList 
         data={itemsBalance}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => <ItemListBalance data={item} />}
        />
      </View> 
    </View>
  )
}
