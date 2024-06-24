import { KeyboardAvoidingView, Platform, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";

import { useSession } from "@/contexts/authSession";
import { router } from "expo-router";
import HeaderRegister from "@/components/header-register";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { MailPlus, LockKeyhole, Eye, EyeOff } from "lucide-react-native";
import { ValidateEmail } from "@/utils/validete-register";

export default function Login() {
  const { signIn } = useSession();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [isPasswordValid, seIsPasswordValid] = useState(false);
  const [visiblePassword, setVisiblePasssword] = useState(true);
  

  const handleFocus = (input: any) => {
    setFocusedInput(input);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const onChangeEmail = (email: string) => {
    setEmail(email);
    setIsEmailValid(ValidateEmail(email));
  };
  
  const onChangePassword = (password: string) => {
    setPassword(password)
    seIsPasswordValid(password.length >= 6);
  };

  const isVisiblePassword = () => {
    setVisiblePasssword(!visiblePassword);
  };

  const sessionLogin = () => {
    const login = {
      email,
      password
    };

    console.log(login);
  } 

  return (
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          className="w-full h-full"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="flex-1 mt-6 p-6 pt-2 justify-between">
            <HeaderRegister />
            <View className='flex-1 justify-center'>
              <View className="">
                <View className='flex-col gap-4 mt-8'>
                  <View 
                    className={
                      `h-16 w-full pl-4 pr-9 flex-row items-center gap-2 
                      border rounded-md bg-gray-600 
                      ${focusedInput === 'email' ? (isEmailValid ? 'border-green-800' : 'border-red-500') : 'border-gray-500/20'}
                      `}>
                    <MailPlus 
                      color={focusedInput === 'email' ? (isEmailValid ? '#18604A' : 'red') : '#718096'} 
                      className='absolute inset-y-0 right-4 flex items-center justify-center' />
                    <TextInput
                      placeholder="Digite seu E-mail"
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      placeholderTextColor={'#4E4949'}
                      keyboardType='email-address'
                      value={email}
                      onChangeText={onChangeEmail}
                      className='w-full h-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                    />
                  </View>
                  <View 
                    className={
                      `h-16 w-full pl-4 pr-4 flex-row items-center justif
                      y-between gap-2 border rounded
                      -md bg-gray-600 ${focusedInput === 'senha' ? (isPasswordValid ? 'border-green-800' : 'border-red-500') : 'border-gray-500/20'}
                      `}>
                    <LockKeyhole 
                      color={focusedInput === 'senha' ? (isPasswordValid ? '#18604A' : 'red') : '#718096'} 
                      className='absolute inset-y-0 right-4 flex items-center justify-center' 
                    />
                    <TextInput
                      placeholder="Digite uma senha"
                      onFocus={() => handleFocus('senha')}
                      onBlur={handleBlur}
                      placeholderTextColor={'#4E4949'}
                      className='w-full h-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                      secureTextEntry={visiblePassword}
                      onChangeText={onChangePassword}
                      value={password}
                    />
                    <TouchableOpacity onPress={() => isVisiblePassword()}>
                      {visiblePassword ? <Eye color={focusedInput === 'senha' ? (isPasswordValid ? '#18604A' : 'red') : '#718096'} className='ml-10' /> : <EyeOff color={focusedInput === 'senha' ? (isPasswordValid ? '#18604A' : 'red') 
                        : '#718096'} className='ml-10' /> 
                      }
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity 
              className='mt-5 h-16 w-full bg-green-900 rounded-full items-center justify-center' 
              onPress={sessionLogin}
            >
              <Text className="text-white text-md font-bold">Continuar</Text>
            </TouchableOpacity>
            <View className='flex-row items-center justify-center mt-5 gap-2'>
              <Text className='text-center'>Não tem uma conta?</Text>
              <Pressable onPress={() => router.push('/register-user-data')}>
                <Text className='text-green-800'>Cadastre-se</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
  )
}