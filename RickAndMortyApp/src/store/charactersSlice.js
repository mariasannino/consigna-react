import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchCharacters,
  fetchPages,
  fetchSearchFilter,
} from "../services/api";

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const characters = await fetchCharacters();
    return characters;
  }
);

export const getCharactersByPage = createAsyncThunk(
  "charaters/getCharactersByPage",
  async (pageNum) => {
    const characters = await fetchPages(pageNum);
    fetchPages(pageNum);
    return characters;
  }
);

export const searchCharacters = createAsyncThunk(
  "characters/searchCharacters",
  async ({ name, pageNum }) => {
    const characters = await fetchSearchFilter(name, pageNum);
    return characters;
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    pageNum: 1,
    searchQuery: "",
    totalPages: 1,
  },
  reducers: {
    setPageNum: (state, action) => {
      state.pageNum = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.characters = action.payload.results;
        state.totalPages = action.payload.info.pages;
      })

      .addCase(getCharactersByPage.fulfilled, (state, action) => {
        state.characters = action.payload.results;
        state.totalPages = action.payload.info.pages;
      })

      .addCase(searchCharacters.fulfilled, (state, action) => {
        state.characters = action.payload.results;
        state.totalPages = action.payload.info.pages;
      });
  },
});

export const { setPageNum, setSearchQuery } = charactersSlice.actions;

export default charactersSlice;
