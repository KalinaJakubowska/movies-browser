import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "list",
    initialState: {
        list: [],
        loading: true,
        numberPages: undefined,
        activePath: "",
        error: false,
        totalResults: undefined,
    },
    reducers: {
        fetchListSuccess: (state, { payload: list }) => {
            state.list = list.results;
            state.numberPages = list.total_pages;
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
        resetState: (state) => {
            state.list = [];
            state.activePath = "";
            state.numberPages = undefined;
            state.loading = true;
            state.error = false;
            state.totalResults = undefined;
        },
    },
});

export const {
    fetchListSuccess,
    fetchListError,
    setActivePath,
    resetState,
} = listSlice.actions;
export const selectList = state => state.list.list;
export const selectLoading = state => state.list.loading;
export const selectError = state => state.list.error;
export const selectNumberPages = state => state.list.numberPages;
export const selectTotalResults = state => state.list.totalResults;

export default listSlice.reducer;