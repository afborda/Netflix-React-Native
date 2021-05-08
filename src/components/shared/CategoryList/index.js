import React from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { REACT_APP_BASE_IMG } from "@env";
import GetGenresList from "../../../service/MovieApi/GetGenresList";
import { useState } from "react";
import GetMovieDetails from "../../../service/MovieApi/GetMovieDetails";
import ModalCustom from "../ModalCustom";

// import { Container } from './styles';

const CategoryList = ({ data, title, show, setShow }) => {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [showModal, setShowModal] = useState(false);

  const getDetailMovie = async (id) => {
    setLoading(!loading);
    setShowModal(true);
    const response = await GetMovieDetails(id);
    setDetails(response);
    setLoading(!loading);
  };

  const Item = ({ value }) => {
    return (
      <TouchableOpacity
        style={{ backgroundColor: "#000000" }}
        onPress={() => getDetailMovie(value.id)}
      >
        <Image
          style={{
            width: 200,
            height: 250,
            marginHorizontal: 5,
            borderRadius: 5,
          }}
          source={{ uri: `${REACT_APP_BASE_IMG}${value.poster_path}` }}
        />
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => {
    return <Item value={item} />;
  };

  return (
    <View>
      <Text
        style={{
          color: "#ffffff",
          fontSize: 22,
          backgroundColor: "#000000",
          fontWeight: "bold",
          paddingVertical: 10,
        }}
      >
        {title}
      </Text>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <ModalCustom show={showModal} setShow={setShowModal} details={details} />
    </View>
  );
};

export default CategoryList;
