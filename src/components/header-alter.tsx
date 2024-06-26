import React from 'react';
import { ChevronLeft, Filter } from 'lucide-react-native';
import { Pressable, View, Text } from 'react-native';
import { router } from 'expo-router';

type headerAltProps = {
  pageTitle: string,
  isFilter: boolean
}

export default function HeaderAlter({ pageTitle, isFilter }: headerAltProps) {
  return (
    <View className="mt-6 pl-4 pt-2 pb-3 flex-row justify-between items-center">
      <Pressable className="justify-center" onPress={() => router.back()}>
        <ChevronLeft color={"#18604A"} size={30} />
      </Pressable>
      <Text className={`text-xl text-green-900 font-bold ${!isFilter ? 'flex-1 text-center' : null}`}>{pageTitle}</Text>
      {isFilter ? (
        <Pressable className="w-12 h-12 justify-center">
        <Filter color={"#18604A"} size={24} />
      </Pressable>
      ) : null}
    </View>
  );
}

