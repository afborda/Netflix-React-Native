import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

// import { Container } from './styles';

const Input = ({ placeholder, password, value, onChangeText }) => {
  return (
    <View style={styles.area}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={password}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  area: {
    height: 60,
    width: "100%",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 15,
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: 60,
    width: "90%",
    borderRadius: 8,
  },
});

export default Input;
