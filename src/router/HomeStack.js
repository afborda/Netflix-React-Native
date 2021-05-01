import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../page/HomeScreen";
import MovieScreen from "../page/MovieScreen";

const MainStack = createStackNavigator();

export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
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
                  source={require("../assets/imageUser.png")}
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
