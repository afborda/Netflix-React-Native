import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieScreen from "../page/MovieScreen";
import Splash from "../page/Splash";
import Login from "../page/Login";
import MainTab from "./MainTab";
import SelectProfile from "../page/SelectProfile";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const MainStack = createStackNavigator();

export default () => {
  const { setValueData, valueData } = useContext(GlobalContext);

  return (
    <MainStack.Navigator initialRouterName="Splash">
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={Splash}
      />
      <MainStack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />

      <MainStack.Screen
        name="SelectProfile"
        options={{ headerShown: false }}
        component={SelectProfile}
      />

      <MainStack.Screen
        name="MainTab"
        component={MainTab}
        options={{
          headerTitle: () => (
            <Image
              style={{ width: 77, height: 21 }}
              source={require("../assets/netflix.png")}
            />
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 20,
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{ width: 17, height: 19, marginRight: 20 }}
                  source={require("../assets/lupa.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{ width: 19, height: 21 }}
                  source={{ uri: valueData.image }}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <MainStack.Screen name="Movie" component={MovieScreen} />
    </MainStack.Navigator>
  );
};
