import HeaderAlter from "@/components/header-alter";
import { useRouter } from "expo-router";
import { BadgeHelp, ChevronRight, CircleUserRound, LogOut, Repeat1, User2, WalletMinimal } from "lucide-react-native";
import React from "react";
import { View, Image, Text, Pressable } from "react-native";

export default function Perfil() {
  const routes = useRouter();

  const logout = () => {
    routes.push("/login")
  }

  return (
    <View className="flex-1 gap-10">
      <HeaderAlter isFilter={false} pageTitle="Perfil" />
      <View className="w-full h-50 p-6">
        <View className="mt-[-50] w-full gap-10 rounded-xl">
          <View className="w-full flex-row items-center p-2 gap-2 bg-white/60 border border-gray-400/20 rounded-md">
            <Image source={require('@/assets/logo-ferrovelho.png')} className="rounded-full" />
            <View className="gap-1">
              <Text className="text-sm font-bold">Daniel Ferro Velho</Text>
              <Text className="text-sm">danielferrovelho@gmail.com</Text>
            </View>
          </View>

          <View className="w-full gap-3">
            <Pressable className="w-full h-14 bg-white rounded-md flex-row justify-between items-center pl-4 pr-4">
              <View className="flex-row items-center gap-4">
                <CircleUserRound color={"#18604A"} />
                <Text>Editar Perfil</Text>
              </View>
              <ChevronRight color={"#18604A"} />
            </Pressable>
            <Pressable className="w-full h-14 bg-white rounded-md flex-row justify-between items-center pl-4 pr-4">
              <View className="flex-row items-center gap-4">
                <WalletMinimal color={"#18604A"} />
                <Text>Métodos de pagamentos</Text>
              </View>
              <ChevronRight color={"#18604A"} />
            </Pressable>
            <Pressable className="w-full h-14 bg-white rounded-md flex-row justify-between items-center pl-4 pr-4">
              <View className="flex-row items-center gap-4">
                <BadgeHelp color={"#18604A"} />
                <Text>Suporte</Text>
              </View>
              <ChevronRight color={"#18604A"} />
            </Pressable>
            <Pressable className="w-full h-14 bg-white rounded-md flex-row justify-between items-center pl-4 pr-4">
              <View className="flex-row items-center gap-4">
                <Repeat1 color={"#18604A"} />
                <Text>Faq</Text>
              </View>
              <ChevronRight color={"#18604A"} />
            </Pressable>
            <Pressable
              onPress={() => logout()}
              className="w-full h-14 bg-white rounded-md flex-row justify-between items-center pl-4 pr-4"
            >
              <View className="flex-row items-center gap-4">
                <LogOut color={"#18604A"} />
                <Text>Sair do app</Text>
              </View>
              <ChevronRight color={"#18604A"} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}