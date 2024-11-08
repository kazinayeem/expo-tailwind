import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function index() {
  return (
    <View className="flex-1 justify-center flex-col gap-5 space-x-0  bg-fuchsia-400 ">
      <Text className="text-red-700 text-2xl">index</Text>
      <Link
        href="/about"
        className="p-5 m-3 bg-slate-500 rounded-xl text-amber-400 text-xl justify-items-center align-middle border border-red-400 first-letter:text-8xl"
      >
        about --
      </Link>
    </View>
  );
}
