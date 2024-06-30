import React, { useContext, useState } from 'react';
import { BookLock, Eye, EyeOff, LockKeyhole, MailPlus, MapPinned, SquareUserRound } from "lucide-react-native";
import { KeyboardAvoidingView, Pressable, ScrollView, Text, View, TextInput, Platform, TouchableOpacity, Alert } from "react-native";
import { useRouter } from 'expo-router';
import HeaderRegister from '@/components/header-register';
import { ValidateEmail, formartCPF, validateCPF, validateName } from '@/utils/validete-register';
import { AuthContext } from '@/contexts/auth';

interface UserData {
  cpf: string;
  name: string;
  email: string;
  password: string;
}

interface InputStatus {
  focused: string | null;
  visiblePassword: boolean;
  isPasswordValid: boolean;
  isEmailValid: boolean;
  isValidCPF: boolean;
  isValidName: boolean;
}

export default function RegisterUserData() {
  const router = useRouter();

  const [userData, setUserData] = useState<UserData>({
    cpf: '',
    name: '',
    email: '',
    password: '',
  });

  const [inputStatus, setInputStatus] = useState<InputStatus>({
    focused: null,
    visiblePassword: true,
    isPasswordValid: false,
    isEmailValid: false,
    isValidCPF: false,
    isValidName: false,
  });

  const handleFocus = (input: string) => {
    setInputStatus((prevState) => ({ ...prevState, focused: input }));
  };

  const handleBlur = () => {
    setInputStatus((prevState) => ({ ...prevState, focused: null }));
  };

  const handleChange = (field: keyof UserData, value: string) => {
    setUserData((prevState) => ({ ...prevState, [field]: value }));

    switch (field) {
      case 'name':
        setInputStatus((prevState) => ({ ...prevState, isValidName: validateName(value) }));
        break;
      case 'cpf':
        const formattedCPF = formartCPF(value);
        setUserData((prevState) => ({ ...prevState, cpf: formattedCPF }));
        setInputStatus((prevState) => ({ ...prevState, isValidCPF: validateCPF(formattedCPF) }));
        break;
      case 'email':
        setInputStatus((prevState) => ({ ...prevState, isEmailValid: ValidateEmail(value) }));
        break;
      case 'password':
        setInputStatus((prevState) => ({ ...prevState, isPasswordValid: value.length >= 6 }));
        break;
      default:
        break;
    }
  };

  const togglePasswordVisibility = () => {
    setInputStatus((prevState) => ({ ...prevState, visiblePassword: !prevState.visiblePassword }));
  };

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('Error authContext not found');
  }

  const { setUser } = authContext;

  const saveDataUser = () => {
    const { name, cpf, email, password } = userData;

    if (!name || !cpf || !email || !password) {
      return Alert.alert('Erro', 'Você deve preencher todos os campos');
    }

    setUser({
      name,
      cpf,
      email,
      password,
      state: '',
      city: ''
    });

    router.push('/register-user-adress');
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
        <View className="flex-1 p-6 pt-2 justify-between">
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
                    ${inputStatus.focused === 'name' ? (inputStatus.isValidName ? 'border-green-800' : 'border-red-500') : 'border-gray-500/20'}
                    `}>
                  <SquareUserRound 
                    color={inputStatus.focused === 'name' ? (inputStatus.isValidName ? '#18604A' : 'red') : '#718096'} 
                    className='absolute inset-y-0 right-4 flex items-center justify-center' 
                  />
                  <TextInput
                    placeholder="Digite seu nome completo"
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className='w-full h-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                    value={userData.name}
                    onChangeText={(value) => handleChange('name', value)}
                  />
                </View>
                <View 
                  className={
                    `h-16 w-full pl-4 pr-9 flex-row items-center gap-2 
                    border rounded-md bg-gray-600 
                    ${inputStatus.focused === 'cpf' ? (inputStatus.isValidCPF ? 'border-green-800' : 'border-red-500') : 'border-gray-500/20'}
                    `}>
                  <BookLock color={inputStatus.focused === 'cpf' ? (inputStatus.isValidCPF ? '#18604A' : 'red') : '#718096'} />
                  <TextInput
                    placeholder="Digite seu CPF"
                    onFocus={() => handleFocus('cpf')}
                    keyboardType='numeric'
                    onBlur={handleBlur}
                    value={userData.cpf}
                    onChangeText={(value) => handleChange('cpf', value)}
                    placeholderTextColor={'#4E4949'}
                    className='w-full h-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  />
                </View>
                <View 
                  className={
                    `h-16 w-full pl-4 pr-9 flex-row items-center gap-2 
                    border rounded-md bg-gray-600 
                    ${inputStatus.focused === 'email' ? (inputStatus.isEmailValid ? 'border-green-800' : 'border-red-500') : 'border-gray-500/20'}
                    `}>
                  <MailPlus 
                    color={inputStatus.focused === 'email' ? (inputStatus.isEmailValid ? '#18604A' : 'red') : '#718096'} 
                    className='absolute inset-y-0 right-4 flex items-center justify-center' />
                  <TextInput
                    placeholder="Digite seu E-mail"
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    placeholderTextColor={'#4E4949'}
                    keyboardType='email-address'
                    value={userData.email}
                    onChangeText={(value) => handleChange('email', value)}
                    className='w-full h-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  />
                </View>
                <View 
                  className={
                    `h-16 w-full pl-4 pr-4 flex-row items-center justif
                    y-between gap-2 border rounded
                    -md bg-gray-600 ${inputStatus.focused === 'senha' ? (inputStatus.isPasswordValid ? 'border-green-800' : 'border-red-500') : 'border-gray-500/20'}
                    `}>
                  <LockKeyhole 
                    color={inputStatus.focused === 'senha' ? (inputStatus.isPasswordValid ? '#18604A' : 'red') : '#718096'} 
                    className='absolute inset-y-0 right-4 flex items-center justify-center' 
                  />
                  <TextInput
                    placeholder="Digite uma senha"
                    onFocus={() => handleFocus('senha')}
                    onBlur={handleBlur}
                    placeholderTextColor={'#4E4949'}
                    className='w-full h-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                    secureTextEntry={inputStatus.visiblePassword}
                    onChangeText={(value) => handleChange('password', value)}
                    value={userData.password}
                  />
                  <TouchableOpacity onPress={togglePasswordVisibility}>
                    {inputStatus.visiblePassword ? <Eye color={inputStatus.focused === 'senha' ? (inputStatus.isPasswordValid ? '#18604A' : 'red') : '#718096'} className='ml-10' /> : <EyeOff color={inputStatus.focused === 'senha' ? (inputStatus.isPasswordValid ? '#18604A' : 'red') 
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
            <Pressable onPress={() => router.push('/sign-in')}>
              <Text className='text-green-800'>Faça o login</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
