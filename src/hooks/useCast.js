import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/utils/constants";
import { addCast } from "../components/utils/movieSlice";

const useCast = (id) => {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/credits?language=en-",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addCast(json));
  };

  useEffect(() => {
    fetchMovie();
  }, []);
};
export default useCast;
