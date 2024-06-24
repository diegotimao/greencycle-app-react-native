import React, { useContext } from "react";
import { AuthContext } from "@/contexts/auth";
import { colors } from "@/styles/colors";
import { Redirect, Tabs, router } from "expo-router";
import { CircleUserRound, Home, MapPinned, TicketX } from "lucide-react-native";

export default function TabLayout() {
  // const authContext = useContext(AuthContext);
  
  // if (!authContext) {
  //   throw new Error('AuthContext not found');
  // };

  // const { user } = authContext;

  // if (user.name === '') {
  //   return router.push("/tutorial");
  // }

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
