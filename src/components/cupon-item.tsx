import { Redirect, useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

type CuponItem = {
  logoSource: any,
  valueDiscont: number,
  onPress: string,
  company: string,
  expiredIn: string
}

export default function CuponItem({ 
  logoSource, 
  valueDiscont, 
  company, 
  expiredIn 
}: CuponItem) {
  const router = useRouter();

  const redirectTo = () => {
    return router.push('/view-cupon')
  }

  return (
    <Pressable
      onPress={() => redirectTo()}
      className="flex-row relative gap-4 pl-7 p-5 bg-white border border-zinc-500/5 items-center rounded-xl">
      <Image source={logoSource} className="w-11 h-11 items-center" />
      <View className='border-dashed border-r border-gray-400 h-full ml-4 mr-4' />
      <View className="gap-3">
        <View className="flex-row justify-between">
          <Text className="text-xl font-bold text-black-900/70">{company}</Text>
          <Text className="text-xl font-bold text-black-900/70">$ {valueDiscont}%</Text>
        </View>
        <Text className="text-sm font-semibold text-zinc-700/70 z-0">Válidos somente até {expiredIn}</Text>
      </View>
      <View className="w-12 h-12 bg-gray-700 border-r border-zinc-500/30 rounded-full absolute top-1/2 transform -ml-8 left-0" />
      <View className="w-12 h-12 z-10 bg-gray-700 border-l border-zinc-500/30 rounded-full absolute top-1/2 transform -right-0 -mr-8" />
    </Pressable>
  )
}
