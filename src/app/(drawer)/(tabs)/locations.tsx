import { FlatList, Text, View } from "react-native";

import EcopontoItem from "@/components/ecoponto-item";
import HeaderAlter from "@/components/header-alter";
import { ecpontoItem } from "@/utils/ecopon-data";

export default function Locations() {
  return (
    <View className="flex-1 bg-gray-700">
      <HeaderAlter />
      <View className="p-6">
        <Text className="text-lg font-heading font-bold">Ecopontos em Paulo Afonso</Text>
      </View>
      <FlatList 
        className="p-6 pt-0 w-full gap-5"
        data={ecpontoItem}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <EcopontoItem ecopontoItem={item} />}
      />
    </View>
  )
}