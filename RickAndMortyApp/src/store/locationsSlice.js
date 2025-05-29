import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchLocationByPage,
  fetchLocationById,
  fetchCharactersFromLocations,
  fetchSearchFilterLocation,
  fetchFilteredLocations,
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

export const filterLocations = createAsyncThunk(
  "locations/filterLocations",
  async ({ name, type, dimension, pageNum }) => {
    const locations = await fetchFilteredLocations({
      name,
      type,
      dimension,
      pageNum,
    });
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
    type: "",
    dimension: "",
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

    setType: (state, action) => {
      state.type = action.payload;
    },

    setDimension: (state, action) => {
      state.dimension = action.payload;
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
      })

      .addCase(filterLocations.fulfilled, (state, action) => {
        state.locations = action.payload.results;
        state.totalPages = action.payload.info.pages;
      });
  },
});

export const {
  setLocationPageNum,
  setSearchQuery,
  clearLocationDetail,
  setType,
  setDimension,
} = locationsSlice.actions;

export default locationsSlice;
