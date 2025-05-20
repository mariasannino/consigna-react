import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchEpisodesByPage,
  fetchEpisodesById,
  fetchCharactersFromEpisodes,
  fetchSearchFilterEpisodes,
} from "../services/api";

export const getEpisodesByPage = createAsyncThunk(
  "episodes/getEpisodesByPage",
  async (pageNum) => {
    const episodes = await fetchEpisodesByPage(pageNum);
    return episodes;
  }
);

export const getEpisodeDetail = createAsyncThunk(
  "episodes/getEpisodeDetail",
  async (id) => {
    const episode = await fetchEpisodesById(id);
    const characters = await fetchCharactersFromEpisodes(episode.characters);
    return { episode, characters };
  }
);

export const searchEpisodes = createAsyncThunk(
  "episodes/searchEpisodes",
  async ({ name, pageNum }) => {
    const episodes = await fetchSearchFilterEpisodes(name, pageNum);
    return episodes;
  }
);

const episodesSlice = createSlice({
  name: "episodes",
  initialState: {
    episodes: [],
    pageNum: 1,
    totalPages: 1,
    episodeDetail: null,
    episodeCharacters: [],
    searchQuery: "",
  },
  reducers: {
    setEpisodePageNum: (state, action) => {
      state.pageNum = action.payload;
    },

    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },

    clearEpisodeDetail: (state) => {
      state.episodeDetail = null;
      state.episodeCharacters = [];
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getEpisodesByPage.fulfilled, (state, action) => {
        state.episodes = action.payload.results;
        state.totalPages = action.payload.info.pages;
      })

      .addCase(searchEpisodes.fulfilled, (state, action) => {
        state.episodes = action.payload.results;
        state.totalPages = action.payload.info.pages;
      })

      .addCase(getEpisodeDetail.fulfilled, (state, action) => {
        state.episodeDetail = action.payload.episode;
        state.episodeCharacters = action.payload.characters;
      });
  },
});

export const { setEpisodePageNum, setSearchQuery, clearEpisodeDetail } =
  episodesSlice.actions;

export default episodesSlice;
