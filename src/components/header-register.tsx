import React from 'react'
import { Image, Text, View } from 'react-native'

export default function HeaderRegister() {
  return (
    <View style={{ flexDirection: 'row', marginTop: 16, height: 128, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('@/assets/icon-green.jpg')} className='w-20 h-20'/>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Vamos começar</Text>
        <Text style={{ fontSize: 16, marginTop: 4 }}>Entre com os dados para concluir o cadastro</Text>
      </View>
    </View>
  )
}
