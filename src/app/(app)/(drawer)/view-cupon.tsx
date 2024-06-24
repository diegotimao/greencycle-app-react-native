import { useRouter } from "expo-router";
import { CircleX } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

export default function ViewCupon() {
  const router = useRouter();

  const closeScreen = () => {
    router.push('/cupons')
  }
 
  return (
    <View className="mt-8 p-10 bg-gray-700 flex-1 gap-10">
      <View className="w-full bg-white p-10 rounded-lg flex-1">
        <View className="flex-row gap-4 items-center">
          <Image source={require('@/assets/logo-ifood.png')} />
          <View className="gap-2">
            <Text className="font-semibold text-xl">$ 10% Off</Text>
            <Text className="font-semibold text-xl">Ifood</Text>
          </View>
        </View>
        <View className="mt-8 gap-2 mb-1">
          <Text className="font-bold text-lg">Resgate este cupom e tenha 10% de desconto.</Text>
          <Text>Compra em lojas físicas</Text>
          <Text>Compras em lojas online</Text>
        </View>
        <View className='border-dashed border-y border-gray-400 h-full w-full top-24' /> 
      </View>
      <View className="w-full items-center">
        <Pressable onPress={closeScreen} className="w-24 h-24 mb-4 bg-white rounded-full items-center justify-center">
          <CircleX color={'red'} size={60} />
        </Pressable>
      </View>
      <View className="w-12 h-12 bg-gray-700 rounded-full absolute top-1/2 transform left-2" />
      <View className="w-12 h-12 z-10 bg-gray-700 rounded-full absolute top-1/2 transform right-2" />
    </View>
  )
}