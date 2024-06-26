import { Image, Pressable, Text, View } from "react-native";
import { ChevronRight } from "lucide-react-native";

import { EcopontoItem as EcopontoItemType } from "@/utils/ecopon-data";
import { useRouter } from "expo-router";

type ecopontoProps = {
  ecopontoItem: EcopontoItemType;
}

export default function EcopontoItem({ ecopontoItem }: ecopontoProps) {
  const routes = useRouter();

  const navigation = () => {
    return routes.push("/ecoponto-details")
  }

  return (
    <Pressable 
      onPress={() => navigation()}
      className="w-full flex-row gap-4 p-5 justify-between items-center bg-white rounded-xl mb-3">
      <View className="w-10 h-10 items-center justify-center">
        <Image source={ecopontoItem.logoUrl} className="rounded-full" />
      </View>
      <View className="-ml-12">
        <Text className="text-md font-bold">{ecopontoItem.name}</Text>
        <Text className="text-sm text-zinc-700 mt-2">Rua: {ecopontoItem.address.road} N: {ecopontoItem.address.number}</Text>
        <Text className="text-sm text-zinc-700 mt-1">{ecopontoItem.address.city} {ecopontoItem.address.country}</Text>
      </View>
      <ChevronRight color="#8E8E93" size={24} />
    </Pressable>
  )
}
