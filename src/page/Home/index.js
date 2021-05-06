import React from "react";
import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  View,
  ActivityIndicator,
} from "react-native";

import GetPopularMovie from "../../service/MovieApi/GetMoviePopular";
import GetTopRated from "../../service/MovieApi/GetTopRated";

import { REACT_APP_BASE_IMG } from "@env";
import CategoryList from "../../components/shared/CategoryList";
import GetGenresList from "../../service/MovieApi/GetGenresList";
import GetGenderType from "../../service/MovieApi/GetGenderType";
import { genderType } from "../../components/shared/utils/enum";

const TabHomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [topRated, setTopRated] = useState([]);
  const [recomended, setRecomended] = useState([]);
  const [popularity, setPopularity] = useState([]);
  const [gender, setGender] = useState([]);

  const [valueTeste, setValueTeste] = useState([]);

  const loadGender = async () => {
    const Array = [];

    const Action = await GetGenresList(28);
    Array.push(Action.results);
    const Adventure = await GetGenresList(12);
    Array.push(Adventure.results);
    const Animation = await GetGenresList(16);
    Array.push(Animation.results);
    const Comedy = await GetGenresList(35);
    Array.push(Comedy.results);
    const Crime = await GetGenresList(80);
    Array.push(Crime.results);
    const Documentary = await GetGenresList(99);
    Array.push(Documentary.results);
    const Drama = await GetGenresList(18);
    Array.push(Drama.results);
    const Family = await GetGenresList(10751);
    Array.push(Family.results);
    const Fantasy = await GetGenresList(14);
    Array.push(Fantasy.results);
    const History = await GetGenresList(36);
    Array.push(History.results);
    const Horror = await GetGenresList(27);
    Array.push(Horror.results);
    const Music = await GetGenresList(10402);
    Array.push(Music.results);
    const Mystery = await GetGenresList(9648);
    Array.push(Mystery.results);
    const Romance = await GetGenresList(10749);
    Array.push(Romance.results);
    const Science_Fiction = await GetGenresList(878);
    Array.push(Science_Fiction.results);
    const TV_Movie = await GetGenresList(10770);
    Array.push(TV_Movie.results);
    const Thriller = await GetGenresList(53);
    Array.push(Thriller.results);
    const War = await GetGenresList(10749);
    Array.push(War.results);
    const Western = await GetGenresList(37);
    Array.push(Western.results);
    setGender(Array);
  };

  const loadTopRater = async () => {
    setLoading(!loading);
    const TopRated = await GetTopRated();
    const first = TopRated.results[1];
    setRecomended(first);
    setTopRated(TopRated.results);
    const Popularity = await GetPopularMovie();
    setLoading(!loading);
    setPopularity(Popularity.results);
  };

  useEffect(() => {
    loadGender();
    loadTopRater();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {loading ? (
          <View>
            <View>
              <Image
                style={{ width: "100%", height: 500 }}
                source={{
                  uri: `${REACT_APP_BASE_IMG}${recomended.poster_path}`,
                }}
              />
            </View>
            <CategoryList data={topRated} title="Top filmes" />
            <CategoryList data={popularity} title="Populares" />
            {gender.map((value, index) => (
              <CategoryList
                key={index}
                data={value}
                title={genderType[index]}
              />
            ))}
          </View>
        ) : (
          <ActivityIndicator size="large" color="#E50914" />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TabHomeScreen;
