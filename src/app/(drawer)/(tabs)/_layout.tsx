import { colors } from "@/styles/colors";
import { Tabs } from "expo-router";
import { Home, MapPinned, TicketX, UserRoundCog } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        borderTopWidth: 0,
        minHeight: 68,
      },
      tabBarItemStyle: {
        paddingBottom: 24,
        paddingTop: 14,
        paddingLeft: 24,
        paddingRight: 24
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.green[900],
      tabBarInactiveTintColor: colors.black[900],
    }}>
      <Tabs.Screen name="index" options={{
        tabBarIcon: ({ size, color }) => (
          <Home size={size} color={color} />
        )
      }}/>
      <Tabs.Screen name="locations" options={{
        tabBarIcon: ({ size, color}) => (
          <MapPinned size={size} color={color}/>
        )
      }}/>
      <Tabs.Screen name="cupons" options={{
        tabBarIcon: ({ size, color}) => (
          <TicketX size={size} color={color} />
        )
      }}/>
      <Tabs.Screen name="perfil" options={{
        tabBarIcon: ({ size, color}) => (
          <UserRoundCog size={size} color={color}/>
        )
      }}/>
    </Tabs>
  )
}