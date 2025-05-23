import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchLocationByPage,
  fetchLocationById,
  fetchCharactersFromLocations,
  fetchSearchFilterLocation,
} from "../services/api";

export const getLocationByPage = createAsyncThunk(
  "locations/getLocationByPage",
  async (pageNum) => {
    const locations = await fetchLocationByPage(pageNum);
    return locations;
  }
);

export const getLocationDetail = createAsyncThunk(
  "locations/getLocationDetail",
  async (id) => {
    const location = await fetchLocationById(id);
    const characters = await fetchCharactersFromLocations(location.residents);
    return { location, characters };
  }
);

export const searchLocations = createAsyncThunk(
  "locations/searchLocations",
  async ({ name, pageNum }) => {
    const locations = await fetchSearchFilterLocation(name, pageNum);
    return locations;
  }
);

const locationsSlice = createSlice({
  name: "locations",
  initialState: {
    locations: [],
    pageNum: 1,
    totalPages: 1,
    locationDetail: null,
    locationCharacters: [],
    searchQuery: "",
  },
  reducers: {
    setLocationPageNum: (state, action) => {
      state.pageNum = action.payload;
    },

    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },

    clearLocationDetail: (state) => {
      state.locationDetail = null;
      state.locationCharacters = [];
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getLocationByPage.fulfilled, (state, action) => {
        state.locations = action.payload.results;
        state.totalPages = action.payload.info.pages;
      })

      .addCase(searchLocations.fulfilled, (state, action) => {
        state.locations = action.payload.results;
        state.totalPages = action.payload.info.pages;
      })

      .addCase(getLocationDetail.fulfilled, (state, action) => {
        state.locationDetail = action.payload.location;
        state.locationCharacters = action.payload.characters;
      });
  },
});

export const { setLocationPageNum, setSearchQuery, clearLocationDetail } =
  locationsSlice.actions;

export default locationsSlice;
