import React, { useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={require("../assets/netflix-logo-splash.png")}
        />
        <View style={{ marginTop: 20 }}>
          <ActivityIndicator color="#E50914" size="large" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 260,
    height: 70,
  },
});

export default Splash;
