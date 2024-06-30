import CuponItem from "@/components/cupon-item";
import CuponsList from "@/components/cupons-list";
import Header from "@/components/header";
import HeaderAlter from "@/components/header-alter";
import { AuthContext } from "@/contexts/auth";
import { usePathname } from "expo-router";
import { useContext } from "react";
import { ScrollView, Text, View, Image, Pressable } from "react-native";

export default function Cupons() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext não foi fornecido corretamente.');
  };

  const { conta } = authContext;

  return (
    <View className="flex-1 bg-gray-700">
      <HeaderAlter isFilter={true} pageTitle="Cupons" />
      <View className="pr-5 pl-5 pt-3">
        <View className="flex-row justify-between items-center p-4 rounded-xl w-full h-24 bg-green-900/20 border border-green-900/20 gap-5">
          <View>
            <Text className="text-lg font-subtitle text-zinc-700">Total de pontos</Text>
            <Text className="text-md font-heading text-zinc-700/90">Troque agora por cupons</Text>
          </View>
          <View className="flex-row gap-1 items-end">
            <Text className="font-heading text-green-900 text-7xl">{conta?.points}</Text>
            <Text className="-mt-10 font-bold text-green-900">pts</Text>
          </View>
        </View>
      </View>
      <View className="p-5">
        <Text className="text-lg font-heading font-bold text-zinc-700/80">Cupons disponíveis</Text>
      </View>
      <CuponsList />
    </View>
  )
}