import React from "react";
import { View, FlatList, Text, Image } from "react-native";
import { REACT_APP_BASE_IMG } from "@env";
import GetGenresList from "../../../service/MovieApi/GetGenresList";

// import { Container } from './styles';

const CategoryList = ({ data, title }) => {
  const Item = ({ value }) => {
    return (
      <View style={{ backgroundColor: "#000000" }}>
        <Image
          style={{
            width: 200,
            height: 250,
            marginHorizontal: 5,
            borderRadius: 5,
          }}
          source={{ uri: `${REACT_APP_BASE_IMG}${value.poster_path}` }}
        />
      </View>
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
    </View>
  );
};

export default CategoryList;
