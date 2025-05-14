import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchCharacters,
  fetchFilteredCharacters,
  fetchPages,
  fetchSearchFilter,
  fetchStatusFilter,
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

export const filterCharactersByStatus = createAsyncThunk(
  "characters/filterCharactersByStatus",
  async ({ status, pageNum }) => {
    const characters = await fetchStatusFilter(status, pageNum);
    return characters;
  }
);

export const filterCharacters = createAsyncThunk(
  "characters/filterCharacters",
  async ({ name, status, gender, species, pageNum }) => {
    const characters = await fetchFilteredCharacters({
      name,
      status,
      gender,
      species,
      pageNum,
    });
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
    status: "",
    gender: "",
    species: "",
  },
  reducers: {
    setPageNum: (state, action) => {
      state.pageNum = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    setStatus: (state, action) => {
      state.status = action.payload;
    },

    setGender: (state, action) => {
      state.gender = action.payload;
    },

    setSpecies: (state, action) => {
      state.species = action.payload;
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
      })

      .addCase(filterCharactersByStatus.fulfilled, (state, action) => {
        state.characters = action.payload.results;
        state.totalPages = action.payload.info.pages;
      })

      .addCase(filterCharacters.fulfilled, (state, action) => {
        state.characters = action.payload.results;
        state.totalPages = action.payload.info.pages;
      });
  },
});

export const { setPageNum, setSearchQuery, setStatus, setGender, setSpecies } =
  charactersSlice.actions;

export default charactersSlice;
