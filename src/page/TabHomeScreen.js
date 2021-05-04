import React from "react";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import GetPopularMovie from "../service/MovieApi/GetMoviePopular";
import GetTopRated from "../service/MovieApi/GetTopRated";

import { REACT_APP_BASE_IMG } from "@env";

// import { Container } from './styles';

const TabHomeScreen = () => {
  const [topRated, setTopRated] = useState([]);

  const loadMovie = async () => {
    const response = await GetPopularMovie();
  };
  const loadTopRater = async () => {
    const response = await GetTopRated();
    setTopRated(response.results);
  };

  useEffect(() => {
    loadTopRater();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {topRated.map((value, index) => (
          <View key={index}>
            <Text>{value.title}</Text>
            <Image
              style={{ width: "100%", height: 600 }}
              source={{ uri: `${REACT_APP_BASE_IMG}${value.poster_path}` }}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TabHomeScreen;
