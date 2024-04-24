import { Star } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

export default function HeaderEcoponto() {
  return (
    <View className="pl-6 pr-6 gap-5">
      <View className="flex-row justify-between">
        <View>
          <Text className="text-2xl font-semibold">Daniel Ferro Velho</Text>
          <Text className="text-lg font-semibold text-gray-500">Ecoponto - 3,4 km</Text>
        </View>
        <Image source={require("@/assets/logo-ferrovelho.png")} className="w-18 h-18 rounded-full" />
      </View>

      <View className="flex-row justify-between mt-5">
        <View className="gap-2">
          <Star color={"black"} size={18}/>
          <Text>10 avaliações</Text>
        </View>
        <View className="items-center gap-1">
          <Text className="text-xl">0</Text>
          <Text>Publicações</Text>
        </View>
        <View className="items-center gap-1">
          <Text className="text-xl">38</Text>
          <Text>Sefuidores</Text>
        </View>
      </View>
      <Pressable 
        className="flex-row mt-5 w-full h-16 bg-green-900 justify-center items-center gap-4 rounded-lg"
      >
        <Image source={require("@/assets/Whatsapp.png")} className="w-8 h-8"/>
        <Text className="text-white font-semibold text-lg">Entrar em contato</Text>
      </Pressable>
    </View>
  )
}