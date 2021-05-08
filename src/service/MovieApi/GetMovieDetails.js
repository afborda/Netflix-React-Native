import Api from "../../config/AxiosConfig";
import { REACT_APP_API_KEY, REACT_APP_BASE_LANGUAGE } from "@env";

const GetMovieDetails = async (idMovie) => {
  const details = await Api.get(
    `movie/${idMovie}?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_BASE_LANGUAGE}&append_to_response=videos`
  );

  return details.data;
};

export default GetMovieDetails;
