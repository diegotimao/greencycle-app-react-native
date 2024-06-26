import React from "react";
import { colors } from "@/styles/colors";
import { Tabs } from "expo-router";
import { CircleUserRound, Home, MapPinned, TicketPercent } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        borderTopWidth: 0,
        minHeight: 60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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
        ),
        tabBarLabel: () => null,
      }}/>
      <Tabs.Screen name="locations" options={{
        title: "Locais",
        tabBarIcon: ({ size, color}) => (
          <MapPinned size={size} color={color}/>
        ),
        tabBarLabel: () => null,
      }}/>
      <Tabs.Screen name="cupons" options={{
        title: "Cupons",
        tabBarIcon: ({ size, color}) => (
          <TicketPercent size={size} color={color} />
        ),
        tabBarLabel: () => null,
      }}/>
      <Tabs.Screen name="perfil"  options={{
        title: "Perfil",
        tabBarIcon: ({ size, color}) => (
          <CircleUserRound size={size} color={color} />
        ),
        tabBarLabel: () => null,
      }}/>
    </Tabs>
  )
}
