import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        results: [],
        loading: true,
        activePath: "",
        error: false,
        query: "",
    },
    reducers: {
        fetchSearchSuccess: (state, { payload: results }) => {
            state.results = results.results;
            state.loading = false;
            state.error = false;
        },
        fetchSearchError: state => {
            state.loading = false;
            state.error = true;
        },
        setActiveSearchPath: (state, { payload: path }) => {
            state.activePath = path;
            state.loading = true;
        },
        resetState: (state) => {
            state.results = [];
            state.activePath = "";
            state.numberPages = undefined;
            state.loading = true;
            state.error = false;
        },
        setQuery: (state, { payload: query }) => {
            state.query = query;
        },
    },
});

export const {
    fetchSearchSuccess,
    fetchSearchError,
    setActiveSearchPath,
    resetState,
    setQuery,
} = searchSlice.actions;
export const selectResults = state => state.search.results;
export const selectLoading = state => state.search.loading;
export const selectError = state => state.search.error;
export const selectQuery = state => state.search.query;

export default searchSlice.reducer;