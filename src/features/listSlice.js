import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "list",
    initialState: {
        list: [],
        loading: true,
        maxPageNumber: undefined,
        activePath: "",
        error: false,
        totalResults: undefined,
    },
    reducers: {
        fetchListSuccess: (state, { payload: list }) => {
            state.list = list.results;
            state.maxPageNumber = list.total_pages;
            state.loading = false;
            state.error = false;
            state.totalResults = list.total_results;
        },
        fetchListError: state => {
            state.loading = false;
            state.error = true;
        },
        setActivePath: (state, { payload: name }) => {
            state.activePath = name;
            state.loading = true;
        },
    },
});

export const {
    fetchListSuccess,
    fetchListError,
    setActivePath,
} = listSlice.actions;
export const selectList = state => state.list.list;
export const selectLoading = state => state.list.loading;
export const selectError = state => state.list.error;
export const selectMaxPageNumber = state => state.list.maxPageNumber;
export const selectTotalResults = state => state.list.totalResults;

export default listSlice.reducer;