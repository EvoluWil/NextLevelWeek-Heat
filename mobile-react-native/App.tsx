import React from "react";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import { Home } from "./src/screens/Home";
import { AuthPrivider } from "./src/hooks/Auth";

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <AuthPrivider>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <Home />
      </AuthPrivider>
    </>
  );
}
