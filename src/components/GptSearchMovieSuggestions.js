import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ShimmerUI from "./ShimmerUI";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames, loading } = useSelector(
    (store) => store.gptSearch
  );
  if (!movieResults) {
    if (loading) return <ShimmerUI />;
    else
      return (
        <div className="w-full md:w-1/2 bg-black grid grid-cols-12 text-white"></div>
      );
  }
  if (loading) return <ShimmerUI />;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
