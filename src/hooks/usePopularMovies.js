import { useEffect } from "react";
import { API_OPTIONS } from "../components/utils/constants";
import { addPopularMovies } from "../components/utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const { popularMovies } = useSelector((store) => store.movies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const response = await data.json();
    dispatch(addPopularMovies(response.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
