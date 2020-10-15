import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "list",
    initialState: {
        list: [],
        loading: true,
        activePage: 1,
        numberPages: undefined,
        activePath: "",
        query: "",
        error: false,
    },
    reducers: {
        fetchListSuccess: (state, { payload: list }) => {
            state.list = list.results;
            state.numberPages = list.total_pages;
            state.loading = false;
            state.error = false;
        },
        fetchListError: state => {
            state.loading = false;
            state.error = true;
        },
        setActivePage: (state, { payload: pageNumber }) => {
            state.activePage = pageNumber;
            state.loading = true;
        },
        setActivePath: (state, { payload: name }) => {
            state.activePath = name;
        },
        resetState: (state) => {
            state.list = [];
            state.activePage = undefined;
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
    fetchListSuccess,
    fetchListError,
    setActivePage,
    setActivePath,
    resetState,
    setQuery,
} = listSlice.actions;
export const selectList = state => state.list.list;
export const selectLoading = state => state.list.loading;
export const selectError = state => state.list.error;
export const selectActivePage = state => state.list.activePage;
export const selectNumberPages = state => state.list.numberPages;
export const selectQuery = state => state.list.query;

export default listSlice.reducer;