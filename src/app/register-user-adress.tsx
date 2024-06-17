import HeaderRegister from '@/components/header-register';
import Select from '@/components/select';
import { AuthContext } from '@/contexts/auth';
import { useRouter } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Pressable, ScrollView, Text, View, Platform, Image, Touchable, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default function RegisterUserData() {
  const route = useRouter();
  const authContext = useContext(AuthContext);

  const [disableSelectCity, setDisableCity] = useState(true);
  const [stateIdSected, setStateIdSected] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  if (!authContext) {
    throw new Error('AuthContext not found')
  };

  const { stateId, setStateId } = authContext;
  
  useEffect(() => {
    if (stateId !== '') {
      setDisableCity(false);
    } else {
      setDisableCity(true);
    }
  });

  const handleStateId = (id: string, name: string) => {
    setState(name);
    setDisableCity(false);
    setStateId(id);
    return setStateIdSected(id);
  }

  const handleSelectCity = (id: string, city: string) => {
    setCity(city);
  }

  const handleClickBackPage = () => {
    setStateId('');
    return route.back();
  };
  
  const handleClickSubmit = () => {
    console.log(state, city)
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        style={{ width: '100%', height: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ flex: 1, marginTop: 24, padding: 24, paddingTop: 8, justifyContent: 'space-between' }}>
          <HeaderRegister />
          <View className='flex-1 justify-and mt-10'>
            <View className="">
              <View className='flex-col gap-4 mt-8'>
                <Select title='Selecione o estado' search='state' stateId={stateId} onChangeSelect={(id, name) => handleStateId(id, name)} />
                {!disableSelectCity ? <Select title='Selecione a cidade' search='city' stateId={stateIdSected} onChangeSelect={(id, name) => handleSelectCity(id, name)} /> : null}
              </View>
            </View>
          </View>
          <View className='flex-col gap-3'>
            <TouchableOpacity className='h-16 w-full bg-white border border-green-900 rounded-full items-center justify-center' onPress={handleClickBackPage}>
              <Text className="text-green-900  text-md font-bold">Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className='h-16 w-full bg-green-900 rounded-full items-center justify-center'
              disabled={false}
              onPress={handleClickSubmit}
            >
              <Text className="text-white text-md font-bold">Finalizar cadastro</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
