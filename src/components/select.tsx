import { Check, ChevronDown, ChevronLeft } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

type SelectType = {
  title: string,
  search: string,
  stateId: string | null,
  onChangeSelect: (id: string) => void
}

export default function Select({ title, search, stateId, onChangeSelect }: SelectType) {
  const [modalVisible, setModalVisible] = useState(false);
  const [txt, setTxt] = useState(title);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const getStateUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';
  const getCityUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`;

  useEffect(() => {
    if (modalVisible) {
      let searchGetUrl = '';
      if (search === 'city') {
        searchGetUrl = getCityUrl;
      } else {
        searchGetUrl = getStateUrl;
      }

      const fetchData = async () => {
        try {
          const response = await fetch(searchGetUrl);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.log('Error ao buscar o estado', error);
          setError(true);
        }
      };
      fetchData();
    }
  }, [modalVisible, search, stateId]); // Adiciona o array de dependências para evitar chamadas infinitas

  const renderOption = ({ item }: any) => (
    <TouchableOpacity style={style.optionsContanier} onPress={() => {
      onChangeSelect(item.id);
      setTxt(item.nome); // Altere item.name para item.nome
      setModalVisible(false);
    }}>
      <Text>{item.nome}</Text>
      <Check color={'green'} size={16} />
    </TouchableOpacity>
  );


  return (
    <>
      <TouchableOpacity className={`h-16 w-full px-5 flex-row items-center justify-between gap-2 rounded-md bg-gray-700 border border-gray-600 `} onPress={() => setModalVisible(true)}>
        <Text className='font-semibold' numberOfLines={1}>{txt}</Text>
        <ChevronDown color={'green'} />
      </TouchableOpacity>
      <Modal animationType='slide' visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <SafeAreaView>
          <View className='p-6 pb-4 pt-4 flex-row justify-between items-center border-b border-b-1 border-zinc-200'>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <ChevronLeft color={'green'} size={30} />
            </TouchableOpacity>
            <Text className='text-lg text-center'>{title}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text className='font-bold text-blue-600 text-base'>Cancelar</Text>
            </TouchableOpacity>
          </View>
          <View className='pb-32'>
            <FlatList
              data={data}
              keyExtractor={(item) => String(item.id)}
              renderItem={renderOption}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </>
  )
}

const style = StyleSheet.create({
  optionsContanier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingHorizontal: 26,
    paddingTop: 15,
    paddingBottom: 15
  },
  opotiosText: {
    fontSize: 16,
  }
});