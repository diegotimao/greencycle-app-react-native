import React from 'react';
import { ChevronLeft, Filter } from 'lucide-react-native';
import { Pressable, View, Text } from 'react-native';

export default function HeaderAlter() {
  return (
    <View className="mt-6 pl-6 pr-6 pt-5 pb-5 flex-row justify-between items-center">
      <Pressable className="w-12 h-12 justify-center">
        <ChevronLeft color={"#18604A"} size={24} />
      </Pressable>
      <Text className="text-xl text-green-900 font-bold">Pontos de coleta</Text>
      <Pressable className="w-12 h-12 justify-center">
        <Filter color={"#18604A"} size={24} />
      </Pressable>
    </View>
  );
}

