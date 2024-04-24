import React, { useEffect } from 'react'
import { View } from 'react-native'
import Header from '@/components/header'
import Balance from '@/components/balance'
import SectionButtonsPage from '@/components/section-buttons-page'

export default function Home() {
  return (
    <View className="flex-1 bg-gray-700">
      <Header />
      <Balance />
      <SectionButtonsPage />
    </View>
  )
}