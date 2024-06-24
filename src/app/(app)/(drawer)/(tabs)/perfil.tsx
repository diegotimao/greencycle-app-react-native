import React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { BadgeHelp, CircleUserRound, LogOut, Repeat1, WalletMinimal } from "lucide-react-native";

import HeaderAlter from "@/components/header-alter";
import ProfilePressable from "@/components/profile-pressable";
import ProfileHeader from "@/components/profile-header";

export default function Perfil() {
  const routes = useRouter();
  
  const logout = () => {
    routes.push("/login")
  }

  return (
    <View className="flex-1 mt-20 gap-10">
      <View className="w-full h-50 p-6">
        <View className="mt-[-50] w-full gap-10 rounded-xl">
          <ProfileHeader />
          <View className="w-full gap-3">
            <ProfilePressable text="Editar Perfil" icon={CircleUserRound} iconColor="#18604A" />
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