import { Slot, Stack } from "expo-router";

import "../../global.css";
export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
    </Stack>
  );
}
