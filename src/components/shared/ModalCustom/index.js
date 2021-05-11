import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { REACT_APP_BASE_IMG } from "@env";

import { useNavigation } from "@react-navigation/native";
import { block } from "react-native-reanimated";

// import { Container } from './styles';

const ModalCustom = ({ show, setShow, details }) => {
  const {
    title,
    id,
    overview,
    genres,
    poster_path,
    release_date,
    runtime,
    vote_average,
    videos,
    backdrop_path,
  } = details;
  console.log(">>>", id);
  return (
    <Modal transparent visible={show} animationType="slide">
      <View style={styles.modalArea}>
        <View style={styles.modalBody}>
          <TouchableOpacity
            style={styles.buttomClose}
            onPress={() => setShow(false)}
          >
            <Image
              style={styles.iconCloseImage}
              source={require("../../../assets/close-modal.png")}
            />
          </TouchableOpacity>

          <View style={styles.containerMovie}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: 150,
                  height: 210,
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 4,
                  }}
                  source={{ uri: `${REACT_APP_BASE_IMG}${poster_path}` }}
                />
              </View>
            </View>
            <View style={{ marginLeft: 5 }}>
              <Text style={styles.nameMovie}>{title}</Text>
              <Text style={styles.overview}>{overview}</Text>
            </View>
          </View>
          <View style={styles.containerButtom}>
            <TouchableOpacity style={styles.buttomAssistir}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ marginRight: 5 }}
                  source={require("../../../assets/play.png")}
                />
                <Text style={{ fontWeight: "bold", color: "#000" }}>
                  Assistir
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttomBaixar}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ marginRight: 5 }}
                  source={require("../../../assets/arrow-down.png")}
                />
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  Baixar
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalArea: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalBody: {
    backgroundColor: "#303030",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    maxHeight: "50%",
  },
  iconCloseImage: {
    width: 18,
    height: 18,
  },
  buttomClose: {
    position: "absolute",
    right: 0,
    zIndex: 1000,
    marginRight: 10,
    marginTop: 10,
  },
  nameMovie: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    maxWidth: "80%",
  },
  containerMovie: {
    paddingHorizontal: 10,
    paddingVertical: 25,
    flexDirection: "row",
  },
  overview: {
    color: "#fff",
    fontSize: 13,
    maxWidth: "75%",
  },
  containerButtom: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  buttomAssistir: {
    backgroundColor: "#fff",
    width: "50%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  buttomBaixar: {
    backgroundColor: "#282828",
    width: "49%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});

export default ModalCustom;
