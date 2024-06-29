import { KeyboardAvoidingView, Platform, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";

import { useSession } from "@/contexts/authSession";
import { router } from "expo-router";
import HeaderRegister from "@/components/header-register";
import { ScrollView } from "react-native-gesture-handler";
import { useContext, useState } from "react";
import { MailPlus, LockKeyhole, Eye, EyeOff } from "lucide-react-native";
import { ValidateEmail } from "@/utils/validete-register";
import { jwtDecode } from "jwt-decode";
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { AuthContext } from "@/contexts/auth";
import { User } from "@/interfaces/User.interface";

interface ISignInUser {
  status: number,
  message: string,
  token: string
}


export default function Login() {
  const { signIn } = useSession();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [isPasswordValid, seIsPasswordValid] = useState(false);
  const [visiblePassword, setVisiblePasssword] = useState(true);

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext not found');
  }

  const { user, setUser } = authContext;

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

  const sessionLogin = async () => {
    if (!isEmailValid || !isPasswordValid) {
      return alert('Você precisa preencher todos os campos.');
    };

    const login = {
      email: email,
      password: password
    };

    try {
      const signInUser = await fetch(`http://192.168.1.111:8080/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
      });

      if (!signInUser.ok) {
        throw new Error('Erro ao fazer o cadastro: ' + signInUser.statusText);
      }

      const responseToken: ISignInUser = await signInUser.json();
      const decodedToken = jwtDecode(responseToken.token);
      await setUser(decodedToken as User);
      console.log('user', user);
      signIn(responseToken.token);
      
      return router.push('/');
    } catch (error) {
      if (error instanceof TypeError) {
        // Exceção de erro de rede ou CORS
        console.error('Erro de rede ou CORS:', error.message);
      } else {
        // Erros gerais
        console.error('Erro ao processar requisição:', error);
      }
    };
  } ;

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
              <View className="flex-1">
                <View className='flex-1 gap-5 mt-8 items-start'>
                  <Animated.View 
                    entering={FadeIn}
                    exiting={FadeOut}
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
                  </Animated.View>
                  <Animated.View 
                    entering={FadeIn}
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
                  </Animated.View>
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
              <Pressable onPress={() => router.push('/sign-up-user')}>
                <Text className='text-green-800'>Cadastre-se</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
  )
}