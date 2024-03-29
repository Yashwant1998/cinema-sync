import { useEffect } from "react";
import { API_OPTIONS } from "../components/utils/constants";
import { setTrailer } from "../components/utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getrailerVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const { results } = await data.json();
    const filterData = results.filter((movie) => movie.type === "Trailer");
    const trailer = filterData.length === 0 ? results[0] : filterData[0];
    dispatch(setTrailer(trailer));
  };

  useEffect(() => {
    getrailerVideo();
  }, []);
};

export default useMovieTrailer;
