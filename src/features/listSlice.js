import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
    loading: true,
    maxPageNumber: undefined,
    error: false,
    totalResults: undefined,
  },
  reducers: {
    fetchList: (state) => {
      state.loading = true;
    },
    fetchListSuccess: (state, { payload: list }) => {
      state.list = list.results;
      state.maxPageNumber = list.total_pages;
      state.loading = false;
      state.error = false;
      state.totalResults = list.total_results;
    },
    fetchListError: (state) => {
      state.loading = false;
      state.error = true;
    },
    resetState: (state) => {
      state.list = [];
      state.loading = true;
      state.maxPageNumber = undefined;
      state.error = false;
      state.totalResults = undefined;
    },
  },
});

export const {
  fetchListSuccess,
  fetchListError,
  fetchList,
  resetState,
} = listSlice.actions;
export const selectList = (state) => state.list.list;
export const selectLoading = (state) => state.list.loading;
export const selectError = (state) => state.list.error;
export const selectMaxPageNumber = (state) => state.list.maxPageNumber;
export const selectTotalResults = (state) => state.list.totalResults;

export default listSlice.reducer;
