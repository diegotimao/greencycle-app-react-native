import { View } from "react-native";
import ButtonsPage from "./buttons-page";

export default function SectionButtonsPage() {
  return (
    <View className="p-5 flex-row w-full items-center justify-between">
      <ButtonsPage title='Estatística Geral' />
      <ButtonsPage title='Espaçco Educa' />
    </View>
  )
}