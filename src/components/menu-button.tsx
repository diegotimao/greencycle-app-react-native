import { AlignLeft } from "lucide-react-native";
import { Pressable } from "react-native";

export default function MenuButton() {
  return (
    <Pressable>
      <AlignLeft color={"#ffffff"} size={35}/>
    </Pressable>
  )
}