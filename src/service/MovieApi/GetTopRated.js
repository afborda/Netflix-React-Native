import Api from "../../config/AxiosConfig";
import { REACT_APP_API_KEY, REACT_APP_BASE_LANGUAGE } from "@env";

const GetTopRated = async (page = 2) => {
  const movie = await Api.get(
    `movie/upcoming?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_BASE_LANGUAGE}&page=${page}`
  );

  return movie.data;
};

export default GetTopRated;
