import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";
import episodesSlice from "./episodesSlice";
const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
    episodes: episodesSlice.reducer,
  },
});

export default store;
