import { View } from "react-native";

import HeaderEcoponto from "@/components/header-ecoponto";
import HeaderAlter from "@/components/header-alter";

export default function EcoponotoDetails() {
  return (
    <View className="flex-1 bg-gray-700">
      <HeaderAlter pageTitle="Ecoponto" isFilter={false} />
      <HeaderEcoponto />
    </View>
  )
}