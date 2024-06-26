import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { ChevronRight } from "lucide-react-native";

type ProfilePressableProps = {
  text: string,
  icon: React.ElementType,
  iconColor: string
}

const ProfilePressable: React.FC<ProfilePressableProps> = ({ text, icon, iconColor }) => {
  const IconComponent = icon;

  return (
    <TouchableOpacity
      className="w-full h-16 rounded-md flex-row justify-between items-center bg-white pl-2 pr-2"
    >
      <View className="flex-row items-center gap-4">
        <View className="w-12 h-12 bg-green-900/15 rounded-lg justify-center items-center">
          <IconComponent color={iconColor} />
        </View>
        <Text>{text}</Text>
      </View>
      <ChevronRight color={"#18604A"} />
    </TouchableOpacity>
  )
}

export default ProfilePressable;