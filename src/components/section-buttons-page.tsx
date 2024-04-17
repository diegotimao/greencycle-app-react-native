import { View } from "react-native";
import ButtonsPage from "./buttons-page";

export default function SectionButtonsPage() {
  return (
    <View className="flex-row -mt-6 p-5 items-center gap-3">
      <View className="flex-row gap-4">
        <ButtonsPage title='Estatística Geral' />
        <ButtonsPage title='Espaçco Educa' />
      </View>
    </View>
  )
}