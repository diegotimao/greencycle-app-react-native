import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { ChevronRight } from "lucide-react-native";

type ProfilePressableProps = {
  text: string,
  icon: React.ElementType,
  iconColor: string,
  onPress?: () => void 
}

const ProfilePressable: React.FC<ProfilePressableProps> = ({ text, icon, iconColor, onPress }) => {
  const IconComponent = icon;

  return (
    <TouchableOpacity
      className="w-full h-16 rounded-md flex-row justify-between items-center bg-white border border-zinc-500/5 pl-2 pr-2"
      onPress={onPress}
    >
      <View className="flex-row items-center gap-4">
        <View className="w-12 h-12 bg-green-900/15 rounded-lg justify-center items-center">
          <IconComponent color={iconColor} />
        </View>
        <Text className="font-heading">{text}</Text>
      </View>
      <ChevronRight color={"#064E3B80"} />
    </TouchableOpacity>
  )
}

export default ProfilePressable;