import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { CreditCard } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import clsx from 'clsx';

export function DrawerButton() {
  const isDividir = true;

  return (
    <Pressable
      className={`py-2 w-full ml-10 ${isDividir ? 'border-b border-green-900' : ''}`}
    >
      <View className="flex-row items-center gap-4 h-14 px-6 -ml-2">
        <MaterialIcons name="credit-card" size={20} color={colors.green[900]} />
        <Text className="text-black-900">Minhas compras</Text>
      </View>
    </Pressable>
  );
};