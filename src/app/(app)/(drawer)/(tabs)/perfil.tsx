import React from "react";
import { Image, View } from "react-native";
import { useRouter } from "expo-router";
import { BadgeHelp, CircleUserRound, LogOut, Repeat1, WalletMinimal } from "lucide-react-native";

import ProfilePressable from "@/components/profile-pressable";
import ProfileHeader from "@/components/profile-header";

import { SessionProvider } from "@/contexts/authSession";

export default function Perfil() {
  const routes = useRouter();

  const logout = () => {
    routes.push("/login")
  }

  return (
    <View className="flex-1 mt-6 gap-10">
      <View className="w-full h-44">
        <Image source={require('@/assets/recicle-background.jpg')} className="w-full h-full" />
        <View className="absolute inset-0 bg-black-900 opacity-50"></View>
      </View>
      <View className="w-full h-50 p-6">
        <View className="mt-[-105] w-full gap-10 rounded-xl">
          <ProfileHeader />
          <View className="w-full gap-3">
            <ProfilePressable text="Editar perfil" icon={CircleUserRound} iconColor="#18604A" />
            <ProfilePressable text="Métodos de pagamentos" icon={WalletMinimal} iconColor="#18604A" />
            <ProfilePressable text="Suporte" icon={BadgeHelp} iconColor="#18604A" />
            <ProfilePressable text="Faq" icon={Repeat1} iconColor="#18604A" />
            <ProfilePressable text="Sair do app" icon={LogOut} iconColor="#18604A" />
          </View>
        </View>
      </View>
    </View>
  )
}