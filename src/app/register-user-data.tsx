import React, { useState } from 'react';
import { BookLock, Eye, EyeOff, LockKeyhole, MailPlus, MapPinned, SquareUserRound } from "lucide-react-native";
import { KeyboardAvoidingView, Pressable, ScrollView, Text, View, TextInput, Platform, Image, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';

export default function RegisterUserData() {
  const route = useRouter();
  const [focusedInput, setFocusedInput] = useState(null);
  const [visiblePassword, setVisiblePasssword] = useState(true);
  const [cpf, setCpf] = useState('');

  const handleFocus = (input: any) => {
    setFocusedInput(input);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const isVisiblePassword = () => {
    if (visiblePassword) {
      setVisiblePasssword(false);
    } else {
      setVisiblePasssword(true);
    };
  };

  const formartCPF = (value: string) => {
    value = value.replace(/\D/g, '');

    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    return value;
  };

  const handleChange = (text: string) => {
    setCpf(formartCPF(text));
  };

  const saveDataUser = () => {
    return route.push('/register-user-adress');
  };

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
          <View className="flex-row mt-4 h-32 justify-center items-center">
            <View className='flex-col items-center'>
              <Image source={require('@/assets/icon-greencycle.png')} />
              <Text className='text-2xl font-bold'>Vamos começar</Text>
              <Text className='text-md mt-1'>Entre com os dados para concluir o cadastro</Text>
            </View>
          </View>
          <View className='flex-1 justify-center'>
            <View className="">
              <Pressable className="flex-row bg-zinc-500 mt-5 h-16 w-full rounded-md items-center justify-center gap-4">
                <MapPinned color={'white'} />
                <Text className="text-white font-semibold">Cadastrar-se como ecoponto</Text>
              </Pressable>
              <View className='flex-col gap-4 mt-8'>
                <View className={`h-16 w-full pl-4 pr-9 flex-row items-center gap-2 border rounded-md bg-gray-600 ${focusedInput === 'name' ? 'border-green-800' : 'border-gray-500/20'}`}>
                  <SquareUserRound color={focusedInput === 'name' ? '#18604A' : '#4E4949'} className='absolute inset-y-0 right-4 flex items-center justify-center' />
                  <TextInput
                    placeholder="Nome completo"
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    placeholderTextColor={'#4E4949'}
                    className='w-full h-full'
                  />
                </View>
                <View className={`h-16 w-full pl-4 pr-9 flex-row items-center gap-2 border rounded-md bg-gray-600 ${focusedInput === 'cpf' ? 'border-green-800' : 'border-gray-500/20'}`}>
                  <BookLock color={focusedInput === 'cpf' ? '#18604A' : '#4E4949'} />
                  <TextInput
                    placeholder="Digite o CPF"
                    onFocus={() => handleFocus('cpf')}
                    keyboardType='numeric'
                    onBlur={handleBlur}
                    value={cpf}
                    onChangeText={handleChange}
                    placeholderTextColor={'#4E4949'}
                    className='w-full h-full'
                  />
                </View>
                <View className={`h-16 w-full pl-4 pr-9 flex-row items-center gap-2 border rounded-md bg-gray-600 ${focusedInput === 'email' ? 'border-green-800' : 'border-gray-500/20'}`}>
                  <MailPlus color={focusedInput === 'email' ? '#18604A' : '#4E4949'} className='absolute inset-y-0 right-4 flex items-center justify-center' />
                  <TextInput
                    placeholder="Email"
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    placeholderTextColor={'#4E4949'}
                    keyboardType='email-address'
                    className='w-full h-full'
                  />
                </View>
                <View className={`h-16 w-full pl-4 pr-4 flex-row items-center justify-between gap-2 border rounded-md bg-gray-600 ${focusedInput === 'senha' ? 'border-green-800' : 'border-gray-500/20'}`}>
                  <LockKeyhole color={focusedInput === 'senha' ? '#18604A' : '#4E4949'} className='absolute inset-y-0 right-4 flex items-center justify-center' />
                  <TextInput
                    placeholder="Senha"
                    onFocus={() => handleFocus('senha')}
                    onBlur={handleBlur}
                    placeholderTextColor={'#4E4949'}
                    className='flex-1 h-full'
                    secureTextEntry={visiblePassword}
                  />
                  <TouchableOpacity onPress={() => isVisiblePassword()}>
                    {visiblePassword ? <EyeOff color={focusedInput === 'senha' ? '#18604A' : '#4E4949'} className='ml-10' /> : <Eye color={focusedInput === 'senha' ? '#18604A' : '#4E4949'} className='ml-10' />}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity className='mt-5 h-16 w-full bg-green-900 rounded-full items-center justify-center' onPress={saveDataUser}>
            <Text className="text-white text-md font-bold">Continuar</Text>
          </TouchableOpacity>
          <Text className='text-center mt-4'>Já tem uma conta? Faça o login</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
