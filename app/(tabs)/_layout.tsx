import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          height: 70,
          paddingBottom: Platform.OS === "ios" ? 20 : 10,
        },
        tabBarActiveTintColor: "#1877F2", 
        tabBarInactiveTintColor: "#ccc", 
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: string;
          let IconPack: any = Ionicons;

          switch (route.name) {
            case "Home":
              IconPack = FontAwesome;
              iconName = "home";
              break;
            case "Explore":
              IconPack = Feather;
              iconName = "compass";
              break;
            case "Bookmark":
              IconPack = Feather;
              iconName = "bookmark";
              break;
            case "Profile":
              IconPack = Ionicons;
              iconName = "person-circle-outline";
              break;
            default:
              IconPack = Ionicons;
              iconName = "ellipse";
          }

          return <IconPack name={iconName} size={24} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ fontSize: 12, color, marginBottom: 4 }}>
            {route.name}
          </Text>
        ),
      })}
    >
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Explore" />
      <Tabs.Screen name="Bookmark" />
      <Tabs.Screen name="Profile" />
    </Tabs>
  );
}
