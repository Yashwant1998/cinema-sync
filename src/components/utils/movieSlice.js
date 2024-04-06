import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    trailer: null,
    movieInfo: null,
    cast: null,
  },
  reducers: {
    setNowPlayingMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    setTrailer(state, action) {
      state.trailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addMovieInfo: (state, action) => {
      state.movieInfo = action.payload;
    },
    addCast: (state, action) => {
      state.cast = action.payload;
    },
  },
});

export const {
  setNowPlayingMovies,
  setTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addCast,
  addMovieInfo,
} = movieSlice.actions;
export default movieSlice.reducer;
