import Select from '@/components/select';
import { ChevronDown, TextSelect } from 'lucide-react-native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Pressable, ScrollView, Text, View, Platform, Image, Touchable, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default function RegisterUserData() {
  // const [focusedInput, setFocusedInput] = useState(null);

  // const handleFocus = (input) => {
  //   setFocusedInput(input);
  // };

  // const handleBlur = () => {
  //   setFocusedInput(null);
  // };
  const [stateId, setStateId] = useState('');

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
          <View style={{ flexDirection: 'row', marginTop: 16, height: 128, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ alignItems: 'center' }}>
              <Image source={require('@/assets/icon-greencycle.png')} />
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Vamos começar</Text>
              <Text style={{ fontSize: 16, marginTop: 4 }}>Entre com os dados para concluir o cadastro</Text>
            </View>
          </View>

          <View className='flex-1 justify-and mt-10'>
            <View className="">
              <View className='flex-col gap-4 mt-8'>
                <Select title='Selecione o estado' search='state' stateId={stateId} onChangeSelect={(id) => setStateId(id)}/>
                <Select title='Selecione a cidade' search='city' stateId={stateId} onChangeSelect={(id) => setStateId(id)}/>
              </View>
            </View>
          </View>
          <TouchableOpacity className='mt-5 h-16 w-full bg-green-900 rounded-full items-center justify-center'>
            <Text className="text-white text-md font-bold">Finalizar cadastro</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
