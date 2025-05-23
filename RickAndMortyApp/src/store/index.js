import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";
import episodesSlice from "./episodesSlice";
import locationsSlice from "./locationsSlice";

const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
    episodes: episodesSlice.reducer,
    locations: locationsSlice.reducer,
  },
});

export default store;
