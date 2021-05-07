import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import Input from "../../components/shared/Input";
import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SelectProfile" }],
    });
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.body}>
        <View style={Styles.conatinerImage}>
          <Image
            style={Styles.img}
            source={require("../../assets/netflix-logo-splash.png")}
          />
        </View>

        <Input
          placeholder="Email ou numero de telefone"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          password
        />

        <TouchableOpacity
          style={Styles.buttom}
          onPress={() => handleMessageButtonClick()}
        >
          <Text style={Styles.text}>Entrar</Text>
        </TouchableOpacity>

        <Text style={Styles.subText}>Novo por aqui? Inscreva-se agora!</Text>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  buttom: {
    width: "90%",
    height: 60,
    backgroundColor: "#E50914",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  text: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
  },
  subText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 13,
    marginTop: 30,
    fontWeight: "bold",
  },
  conatinerImage: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 260,
    marginBottom: 100,
  },
});
export default Login;
