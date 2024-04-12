import { Image, View } from "react-native"
import { DrawerContentComponentProps } from "@react-navigation/drawer"

export default function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View className="flex-1 bg-gray-700">
      <View className="mt-20 w-full justify-center items-center">
        <Image source={require('@/assets/greencyclelogo.png')} />
      </View>
    </View>
  )
}