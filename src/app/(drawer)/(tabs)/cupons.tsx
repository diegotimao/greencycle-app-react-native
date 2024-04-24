import CuponItem from "@/components/cupon-item";
import CuponsList from "@/components/cupons-list";
import Header from "@/components/header";
import { ScrollView, Text, View, Image, Pressable } from "react-native";

export default function Cupons() {
  return (
    <View className="flex-1 bg-gray-700">
      <Header />
      <View className="p-5">
        <Text className="text-lg font-semibold text-blue-800">Cupons disponíveis</Text>
      </View>
      <CuponsList/>
    </View>
  )
}