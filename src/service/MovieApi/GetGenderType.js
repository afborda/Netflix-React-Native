import Api from "../../config/AxiosConfig";
import { REACT_APP_API_KEY, REACT_APP_BASE_LANGUAGE } from "@env";

const GetGenderType = async () => {
  const genres = await Api.get(
    `genre/movie/list?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_BASE_LANGUAGE}`
  );

  return genres.data;
};

export default GetGenderType;
