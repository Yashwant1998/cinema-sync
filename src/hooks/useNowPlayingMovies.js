import { useEffect } from "react";
import { API_OPTIONS } from "../components/utils/constants";
import { setNowPlayingMovies } from "../components/utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const { nowPlayingMovies } = useSelector((store) => store.movies);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );

    const response = await data.json();
    dispatch(setNowPlayingMovies(response.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
