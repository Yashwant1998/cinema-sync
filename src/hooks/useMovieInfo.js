import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/utils/constants";
import { addMovieInfo } from "../components/utils/movieSlice";

const useMovieInfo = (id) => {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addMovieInfo(json));
  };

  useEffect(() => {
    fetchMovie();
  }, []);
};
export default useMovieInfo;
