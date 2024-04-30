import { colors } from "@/styles/colors";
import { Tabs } from "expo-router";
import { CircleUserRound, Home, MapPinned, TicketX, UserRoundCog } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        borderTopWidth: 0,
        minHeight: 68,
      },
      tabBarItemStyle: {
        paddingBottom: 12,
        gap: 5,
        paddingTop: 14,
        paddingLeft: 24,
        paddingRight: 24
      },
      tabBarActiveTintColor: colors.green[900],
      tabBarInactiveTintColor: colors.black[900],
    }}>
      <Tabs.Screen name="index" options={{
        title: "Home",
        tabBarIcon: ({ size, color }) => (
          <Home size={size} color={color} />
        )
      }}/>
      <Tabs.Screen name="locations" options={{
        title: "Locais",
        tabBarIcon: ({ size, color}) => (
          <MapPinned size={size} color={color}/>
        )
      }}/>
      <Tabs.Screen name="cupons" options={{
        title: "Cupons",
        tabBarIcon: ({ size, color}) => (
          <TicketX size={size} color={color} />
        )
      }}/>
      <Tabs.Screen name="perfil"  options={{
        title: "Perfil",
        tabBarIcon: ({ size, color}) => (
          <CircleUserRound size={size} color={color} />
        )
      }}/>
    </Tabs>
  )
}