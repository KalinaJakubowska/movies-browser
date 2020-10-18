import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        results: [],
        loading: true,
        activePath: "",
        error: false,
        query: "",
        open: false,
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
        setQuery: (state, { payload: query }) => {
            state.query = query;
        },
        setOpen: (state, { payload: open }) => {
            state.open = open;
        },
    },
});

export const {
    fetchSearchSuccess,
    fetchSearchError,
    setActiveSearchPath,
    setQuery,
    setOpen,
} = searchSlice.actions;
export const selectResults = state => state.search.results;
export const selectLoading = state => state.search.loading;
export const selectError = state => state.search.error;
export const selectQuery = state => state.search.query;
export const selectOpen = state => state.search.open;

export default searchSlice.reducer;