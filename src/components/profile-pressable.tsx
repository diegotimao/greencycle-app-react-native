import React from "react";
import { Pressable, Text, View } from "react-native";
import { ChevronRight } from "lucide-react-native";

type ProfilePressableProps = {
  text: string,
  icon: React.ElementType,
  iconColor: string
}

const ProfilePressable: React.FC<ProfilePressableProps> = ({ text, icon, iconColor }) => {
  const IconComponent = icon;

  return (
    <Pressable 
      className="w-full h-14 bg-white rounded-md flex-row justify-between items-center pl-4 pr-4"
    >
      <View className="flex-row items-center gap-4">
        <IconComponent color={iconColor} />
        <Text>{text}</Text>
      </View>
      <ChevronRight color={"#18604A"} />
    </Pressable>
  )
}

export default ProfilePressable;