import { MaterialIcons } from "@expo/vector-icons";
import { BarChart3 } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

type ButtonsProps = {
  title: string,
}

export default function ButtonsPage({ title }: ButtonsProps) {
  return (
    <Pressable className="w-['172px'] bg-white h-32 rounded-lg p-5 gap-4">
      <View className="w-12 h-12 rounded-full bg-blue-300">
        <BarChart3 color={'black'} />
      </View>
      <Text className="font-semibold text-lg text-blue-700">{title}</Text>
    </Pressable>
  )
}