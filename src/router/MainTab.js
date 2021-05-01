import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabHomeScreen from "../page/TabHomeScreen";
import TabMovieList from "../page/TabMovieList";

const MainTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="TabHome" component={TabHomeScreen} />
      <Tab.Screen name="TabMovieList" component={TabMovieList} />
    </Tab.Navigator>
  );
};

export default MainTab;
