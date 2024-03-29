import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { nowPlayingMovies: null, trailer: null },
  reducers: {
    setNowPlayingMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    setTrailer(state, action) {
      state.trailer = action.payload;
    },
  },
});

export const { setNowPlayingMovies, setTrailer } = movieSlice.actions;
export default movieSlice.reducer;
