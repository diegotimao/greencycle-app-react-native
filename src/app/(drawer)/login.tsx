import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";

import {
  LockKeyhole,
  Mail
} from "lucide-react-native";

export default function Login() {
  return (
    <KeyboardAvoidingView className="flex-1 bg-gray-700 mt-6 p-6 justify-between">
      <ScrollView className="flex-1">
        <View>
          <Image source={require("@/assets/greencyclelogo.png")} />
        </View>

        <View>
          <Text>Login</Text>
          <Text>Insira seus dados de login e contribua para a preservação do planeta</Text>
        </View>

        <View className="gap-5 mt-10">
          <View className="flex-row w-full gap-2">
            <View className="w-14 h-14 border border-gray-400 items-center justify-center bg-white rounded-md">
              <Mail color={'black'} />
            </View>
            <TextInput placeholder="E-mail" className="flex-1 h-14 border border-gray-400 bg-white rounded-md pl-4" />
          </View>
          <View className="flex-row w-full gap-2">
            <View className="w-14 h-14 border border-gray-400 items-center justify-center bg-white rounded-md">
              <LockKeyhole color={'black'} />
            </View>
            <TextInput placeholder="Senha" className="flex-1 h-14 border border-gray-400 bg-white rounded-md pl-4" />
          </View>
          <View className="w-full items-end">
            <Text>Esqueci minha senha</Text>
          </View>
          <Pressable className="w-full h-14 bg-green-900 items-center justify-center rounded-md mt-6">
            <Text className="text-white">Entrar</Text>
          </Pressable>
        </View>
        <View className="w-full items-center">
          <Text>Criar conta</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}