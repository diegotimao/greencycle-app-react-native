import { ActivityIndicator } from "react-native";

export function Loading() {
  return (
    <ActivityIndicator className="flex-1 bg-gray-700 items-center justify-center" size={60} />
  )
}