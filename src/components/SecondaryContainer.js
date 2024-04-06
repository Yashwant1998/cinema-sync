import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import ShimmerUI from "./ShimmerUI";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  if (!movies) return <ShimmerUI />;

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies ? movies.nowPlayingMovies : []}
        />

        <MovieList
          title={"Popular"}
          movies={movies.nowPlayingMovies ? movies.topRatedMovies : []}
        />

        <MovieList
          title={"Top Rated"}
          movies={movies.nowPlayingMovies ? movies.popularMovies : []}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
