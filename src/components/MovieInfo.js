import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IMG_LINK } from "./utils/constants";
import MovieMid from "./MovieMid";
import useMovieInfo from "../hooks/useMovieInfo";
import { Header } from "./Header";
import MovieInfoTop from "./MovieInfoTop";
import ShimmerUI from "./ShimmerUI";

const MovieInfo = () => {
  const { id } = useParams();
  useMovieInfo(id);
  const info = useSelector((store) => store.movies.movieInfo);
  if (!info) return <ShimmerUI />;

  return (
    <div className="relative w-full">
      <Header />
      <div className="h-[100vh] w-[100%] top-0 absolute -z-10 overflow-hidden bg-black">
        <img
          className="w-12/12 mx-auto brightness-[.3] scale-125  xl:scale-105"
          src={
            IMG_LINK +
            (info?.belongs_to_collection?.backdrop_path || info?.backdrop_path)
          }
          alt="movieinfobg"></img>
      </div>
      <MovieInfoTop info={info} />
      {info && <MovieMid id={info?.id} info={info} />}{" "}
    </div>
  );
};
export default MovieInfo;
