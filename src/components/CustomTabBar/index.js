import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

// import { Container } from './styles';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <SafeAreaView style={styles.conatiner}>
      {state.routes.map((route, index) => {
        console.log(route);
        const { options } = descriptors[route.key];

        let label = route.name;

        if (options.tabBarLabel) {
          label = options.tabBarLabel;
        } else if (options.title) {
          label = options.title;
        }

        const handleTapPress = () => {
          navigation.navigate(route.name);
        };

        if (route.name === "TabMovieList") {
          return (
            <TouchableOpacity
              key={index}
              style={styles.middleTab}
              onPress={handleTapPress}
            >
              <Image source={require("../../assets/N.png")} />
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity
              key={index}
              style={styles.tab}
              onPress={handleTapPress}
            >
              <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
          );
        }
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "row",
    backgroundColor: "#171717",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  label: {
    fontSize: 16,
    color: "#fff",
  },
  middleTab: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    marginTop: -20,
    borderRadius: 35,
  },
});

export default CustomTabBar;
