import React, { useContext, useEffect, useState } from 'react';
import { BookLock, Eye, EyeOff, LockKeyhole, MailPlus, MapPinned, SquareUserRound } from "lucide-react-native";
import { KeyboardAvoidingView, Pressable, ScrollView, Text, View, TextInput, Platform, Image, TouchableOpacity, Alert } from "react-native";
import { useRouter } from 'expo-router';
import HeaderRegister from '@/components/header-register';
import { ValidateEmail, formartCPF, validateCPF, validateName } from '@/utils/validete-register';
import { AuthContext } from '@/contexts/auth';

export default function RegisterUserData() {
  const route = useRouter();

  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [focusedInput, setFocusedInput] = useState(null);
  const [visiblePassword, setVisiblePasssword] = useState(true);
  const [isPasswordValid, seIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isValidCPF, setIsValidCPF] = useState(false);
  const [isValidName, setIsValideName] = useState(false);

  const handleFocus = (input: any) => {
    setFocusedInput(input);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const onChangeName = (name: string) => {
    setName(name);
    setIsValideName(validateName(name));
  };

  const isVisiblePassword = () => {
    setVisiblePasssword(!visiblePassword);
  };

  const onChangeCPF = (cpf: string) => {
    setCpf(formartCPF(cpf));
    setIsValidCPF(validateCPF(cpf));
  };

  const onChangeEmail = (email: string) => {
    setEmail(email);
    setIsEmailValid(ValidateEmail(email));
  };

  const onChangePassword = (password: string) => {
    setPassword(password)
    seIsPasswordValid(password.length >= 6);
  };
 
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('Error authContext not found');
  }

  const { user, setUser } = authContext;

  const saveDataUser = () => {
    setUser({
      name: name,
      cpf: cpf,
      email: email,
      password: password,
      state: '',
      city: ''
    })

    if (!name || !cpf || !email || !password) {
      return alert('Voçê deve preencher todos os campos');
    };

    route.push('/register-user-adress');
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
          <HeaderRegister />
          <View className='flex-1 justify-center'>
            <View className="">
              <Pressable className="flex-row bg-green-500 mt-5 h-16 w-full rounded-md items-center justify-center gap-4">
                <MapPinned color={'white'} />
                <Text className="text-white font-semibold">Cadastrar-se como ecoponto</Text>
              </Pressable>
              <View className='flex-col gap-4 mt-8'>
                <View 
                  className={
                    `h-16 w-full pl-4 pr-9 flex-row items-center gap-2 
                    border rounded-md bg-gray-600 
                    ${focusedInput === 'name' ? (isValidName ? 'border-green-800' : 'border-red-500') : 'border-gray-500/20'}
                    `}>
                  <SquareUserRound 
                    color={focusedInput === 'name' ? (isValidName ? '#18604A' : 'red') : '#718096'} 
                    className='absolute inset-y-0 right-4 flex items-center justify-center' 
                  />
                  <TextInput
                    placeholder="Digite seu nome completo"
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className='w-full h-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                    value={name}
                    onChangeText={onChangeName}
                  />
                </View>
                <View 
                  className={
                    `h-16 w-full pl-4 pr-9 flex-row items-center gap-2 
                    border rounded-md bg-gray-600 
                    ${focusedInput === 'cpf' ? (isValidCPF ? 'border-green-800' : 'border-red-500') : 'border-gray-500/20'}
                    `}>
                  <BookLock color={focusedInput === 'cpf' ? (isValidCPF ? '#18604A' : 'red') : '#718096'} />
                  <TextInput
                    placeholder="Digite seu CPF"
                    onFocus={() => handleFocus('cpf')}
                    keyboardType='numeric'
                    onBlur={handleBlur}
                    value={cpf}
                    onChangeText={onChangeCPF}
                    placeholderTextColor={'#4E4949'}
                    className='w-full h-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  />
                </View>
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
            onPress={saveDataUser}
          >
            <Text className="text-white text-md font-bold">Continuar</Text>
          </TouchableOpacity>
          <View className='flex-row items-center justify-center mt-5 gap-2'>
            <Text className='text-center'>Já tem uma conta?</Text>
            <Pressable>
              <Text className='text-green-800'>Faça o login</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
