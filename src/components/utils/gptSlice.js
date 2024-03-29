import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: { gptSearch: false },
  reducers: {
    setGptSearch(state) {
      state.gptSearch = !state.gptSearch;
    },
  },
});
export const { setGptSearch } = gptSlice.actions;
export const gptReducer = gptSlice.reducer;
