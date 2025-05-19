import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchEpisodesByPage } from "../services/api"; // adjust path as needed

export const getEpisodesByPage = createAsyncThunk(
  "episodes/getEpisodesByPage",
  async (pageNum) => {
    const episodes = await fetchEpisodesByPage(pageNum);
    return episodes;
  }
);

const episodesSlice = createSlice({
  name: "episodes",
  initialState: {
    episodes: [],
    pageNum: 1,
    totalPages: 1,
  },
  reducers: {
    setEpisodePageNum: (state, action) => {
      state.pageNum = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEpisodesByPage.fulfilled, (state, action) => {
      state.episodes = action.payload.results;
      state.totalPages = action.payload.info.pages;
    });
  },
});

export const { setEpisodePageNum } = episodesSlice.actions;

export default episodesSlice;
