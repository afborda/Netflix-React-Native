import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';

const ModalCustom = ({ show, setShow, details }) => {
  const { title, id } = details;
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
          <Text>{title}</Text>
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
    backgroundColor: "#ff00ff",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    minHeight: 300,
  },
  iconCloseImage: {
    width: 18,
    height: 18,
  },
  buttomClose: {
    backgroundColor: "red",
    position: "absolute",
    right: 0,
  },
});

export default ModalCustom;
