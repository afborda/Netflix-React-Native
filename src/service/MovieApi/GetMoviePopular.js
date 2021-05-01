import Api from "../../config/AxiosConfig";
import { REACT_APP_API_KEY, REACT_APP_BASE_LANGUAGE } from "@env";

const GetPopularMovie = async () => {
  const movie = await Api.get(
    `movie/popular?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_BASE_LANGUAGE}&page=1`
  );

  return movie.data;
};

export default GetPopularMovie;
