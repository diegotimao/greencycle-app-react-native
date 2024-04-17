import React from 'react';
import { ChevronLeft } from 'lucide-react-native';
import { Pressable, View, Text } from 'react-native';

export default function HeaderAlter() {
  return (
    <View className="mt-6 pl-10 pr-10 pt-5 pb-5 flex-row justify-between items-center">
      <Pressable className="w-12 h-12 bg-white rounded-full items-center justify-center">
        <ChevronLeft color="#18604A" size={32} />
      </Pressable>
      <Text className="flex-1 text-xl text-center text-green-900 font-normal">Pontos de coleta</Text>
    </View>
  );
}

