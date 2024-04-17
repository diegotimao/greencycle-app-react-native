import { Image, Pressable, Text, View } from "react-native"
import { DrawerContentComponentProps } from "@react-navigation/drawer"
import React from "react"
import { BadgeDollarSign, BadgeHelp, Cog, CreditCard, FileTerminal } from "lucide-react-native"

export default function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View className="flex-1 bg-gray-700 justify-between">
      <View className="gap-10">
        <View className="mt-14 w-full pl-5 border-b border-green-900/20 pb-6">
          <Image source={require('@/assets/greencyclelogo.png')} className="w-34" resizeMode="contain" />
        </View>
        <View className="pl-5 gap-7">
          <Pressable className="flex-row gap-2 items-center">
            <CreditCard color={"black"} />
            <Text className="font-semibold text-md">Metodos de pagamentos</Text>
          </Pressable>
          <Pressable className="flex-row item-center gap-2">
            <BadgeDollarSign color={"black"} />
            <Text className="font-semibold text-md">Minhas vendas</Text>
          </Pressable>
          <Pressable className="flex-row gap-2 items-center">
            <BadgeHelp color={"black"} />
            <Text className="font-semibold text-md">FaQs</Text>
          </Pressable>
          <Pressable className="flex-row gap-2 items-center">
            <FileTerminal color={"black"} />
            <Text className="font-semibold text-md">Termos e seriços</Text>
          </Pressable>
          <Pressable className="flex-row gap-2 items-center">
            <Cog color={"black"} />
            <Text className="font-semibold text-md">Configurações</Text>
          </Pressable>
        </View>
      </View>

      <View className="w-full h-32 pb-10 p-5">
        <View className="w-full h-full bg-gray-400/20 p-2 rounded-md">
          <Pressable className="flex-row gap-4">
            <Image source={require("@/assets/avatar-user.jpg")} className="w-12 h-12 rounded-full" />
            <View>
              <Text>Diego dos Santos</Text>
              <Text className="text-sm">diegotimao1104@gmail.com</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  )
}