import Api from "../../config/AxiosConfig";
import { REACT_APP_API_KEY, REACT_APP_BASE_LANGUAGE } from "@env";

const GetGenresList = async (idGenres) => {
  const genres = await Api.get(
    `discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=${idGenres}`
  );

  return genres.data;
};

export default GetGenresList;
