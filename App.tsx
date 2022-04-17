import React from "react";
import { Routes } from "./src/routes";
import { RussoOne_400Regular } from "@expo-google-fonts/russo-one";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    RussoOne_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Routes />
    </>
  );
}
