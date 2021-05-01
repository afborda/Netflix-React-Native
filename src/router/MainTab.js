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
      initialRouteName="TabMovieList"
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="TabHome"
        component={TabHomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: <Image source={require("../assets/home.png")} />,
        }}
      />
      <Tab.Screen
        name="TabMovieList"
        component={TabMovieList}
        options={{ tabBarLabel: "Movie" }}
      />
      <Tab.Screen
        name="TabDownload"
        component={TabDownload}
        options={{
          tabBarLabel: "Download",
          tabBarIcon: <Image source={require("../assets/downloads.png")} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
