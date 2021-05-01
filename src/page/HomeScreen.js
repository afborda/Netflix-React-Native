import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleMovieClick = () => {
    navigation.navigate("Movie");
  };
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title="Ir para a tela Movie" onPress={handleMovieClick} />
    </SafeAreaView>
  );
};

export default HomeScreen;
