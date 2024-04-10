import Header from '@/components/Header'
import Balance from '@/components/balance'
import React from 'react'
import { View } from 'react-native'

export default function Home() {
  return (
    <View className="flex-1 bg-gray-700">
      <Header/>
      <Balance />
    </View>
  )
}