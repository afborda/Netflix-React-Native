import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../context/GlobalContext";

const PerfilUser = [
  {
    image:
      "https://images.unsplash.com/photo-1620057604592-ceccf0143ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
    name: "Abner",
  },
  {
    image:
      "https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    name: "Joao",
  },
  {
    image:
      "https://images.unsplash.com/photo-1620246499779-f26874d7fe53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    name: "Marta",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599056377758-4808a7e70337?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80",
    name: "Miguel",
  },
];

const SelectProfile = () => {
  const navigation = useNavigation();
  const { setValueData, valueData } = useContext(GlobalContext);

  const handleClickSelect = (value) => {
    setValueData(value);

    navigation.reset({
      routes: [
        {
          name: "MainTab",
        },
      ],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={require("../../assets/netflix-logo-perfil.png")} />
      </View>
      <View style={styles.selectUser}>
        <Text style={styles.question}>Quem está assistindo?</Text>
        <View style={styles.containerProfile}>
          {PerfilUser.map((value, index) => (
            <View key={index}>
              <View>
                <TouchableOpacity onPress={() => handleClickSelect(value)}>
                  <Image style={styles.image} source={{ uri: value.image }} />
                </TouchableOpacity>
                <Text style={styles.nameUser}>{value.name}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  containerImage: {
    height: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  selectUser: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
  },
  containerProfile: {
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 130,
    height: 120,
    borderRadius: 4,
  },
  nameUser: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  question: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
});

export default SelectProfile;
