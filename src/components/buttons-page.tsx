import { BarChart3, GraduationCap } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

type ButtonsProps = {
  title: string,
}

export default function ButtonsPage({ title }: ButtonsProps) {
  return (
    <Pressable className="w-['172px'] bg-white h-32 rounded-lg p-5 gap-4">
      <View className="w-12 h-12 rounded-full bg-blue-300 justify-center items-center">
        {title === 'Estatística Geral' ? <BarChart3 color={'black'} size={20}/> : <GraduationCap color={'black'} />}
      </View>
      <Text className="font-semibold text- text-blue-700">{title}</Text>
    </Pressable>
  )
}