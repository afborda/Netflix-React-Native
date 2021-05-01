import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';

const MovieScreen = () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text>List Movies</Text>
      <Button title="Voltar" onPress={handleBackButton} />
    </View>
  );
};

export default MovieScreen;
