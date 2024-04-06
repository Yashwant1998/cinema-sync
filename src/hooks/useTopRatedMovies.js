import { useEffect } from "react";
import { API_OPTIONS } from "../components/utils/constants";
import { addTopRatedMovies } from "../components/utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const { topRatedMovies } = useSelector((store) => store.movies);
  const geTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const response = await data.json();
    dispatch(addTopRatedMovies(response.results));
  };

  useEffect(() => {
    !topRatedMovies && geTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
