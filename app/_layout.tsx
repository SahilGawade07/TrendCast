// app/_layout.tsx

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme as useSystemColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useSystemColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
      <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="index" />

        <Stack.Screen name="+not-found" />
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </Stack>
  );
}
