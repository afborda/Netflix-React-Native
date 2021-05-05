import React from "react";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, View } from "react-native";

import GetPopularMovie from "../../service/MovieApi/GetMoviePopular";
import GetTopRated from "../../service/MovieApi/GetTopRated";

import { REACT_APP_BASE_IMG } from "@env";
import CategoryList from "../../components/shared/CategoryList";

const TabHomeScreen = () => {
  const [topRated, setTopRated] = useState([]);
  const [recomended, setRecomended] = useState([]);

  const loadMovie = async () => {
    const response = await GetPopularMovie();
  };
  const loadTopRater = async () => {
    const response = await GetTopRated();
    const first = response.results[0];
    setRecomended(first);
    setTopRated(response.results);
  };

  useEffect(() => {
    loadTopRater();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            style={{ width: "100%", height: 600 }}
            source={{ uri: `${REACT_APP_BASE_IMG}${recomended.poster_path}` }}
          />
        </View>
        <CategoryList data={topRated} title="Top filmes" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TabHomeScreen;
