import { BarChart3, GraduationCap } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

type ButtonsProps = {
  title: string,
};

export default function ButtonsPage({ title }: ButtonsProps) {
  return (
    <Pressable className="w-[48%] bg-white border border-zinc-500/5 h-32 rounded-lg p-5 gap-4">
      <View className="w-12 h-12 rounded-full bg-green-900/80 justify-center items-center">
        {title === 'Estatística Geral' ? <BarChart3 color={'white'} size={20}/> : <GraduationCap color={'white'} />}
      </View>
      <Text className="font-bold text-green-900/80">{title}</Text>
    </Pressable>
  );
};