import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/router/MainStack";
import { GlobalStorage } from "./src/context/GlobalContext";

export default function App() {
  return (
    <NavigationContainer>
      <GlobalStorage>
        <MainStack />
      </GlobalStorage>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
