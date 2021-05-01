import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabHomeScreen from "../page/TabHomeScreen";
import TabMovieList from "../page/TabMovieList";
import TabDownload from "../page/TabDownload";
import CustomTabBar from "../components/CustomTabBar";
import { Image } from "react-native";

const MainTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let imgSource = null;

          switch (route.name) {
            case "TabHome":
              imgSource = require("../assets/home.png");

              break;
            case "TabMovieList":
              imgSource = require("../assets/play-circle.png");

              break;
            case "TabDownload":
              imgSource = require("../assets/downloads.png");

              break;

            default:
              break;
          }
          return <Image source={imgSource} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#fff",
        style: { backgroundColor: "#171717" },
        labelStyle: {
          marginTop: -8,
          marginBottom: 5,
          fontSize: 10,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="TabHome"
        component={TabHomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="TabMovieList"
        component={TabMovieList}
        options={{ tabBarLabel: "Movie" }}
      />
      <Tab.Screen
        name="TabDownload"
        component={TabDownload}
        options={{ tabBarLabel: "Download" }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
