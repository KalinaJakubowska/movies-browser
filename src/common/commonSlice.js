import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
    name: "common",
    initialState: {
        genresList: [],
        loading: true,
        theme: JSON.parse(localStorage.getItem("theme")) || [],
    },
    reducers: {
        fetchCommon: state => {
            state.loading = true;
        },
        fetchCommonSuccess: (state, { payload: data }) => {
            state.genresList = data.genres;
            state.loading = false;
        },
        fetchCommonError: state => {
            state.loading = false;
        },
        setTheme: (state, { payload }) => {
            state.theme = payload;
            localStorage.setItem("theme", JSON.stringify(state.theme));
        }
    },
});

export const {
    fetchCommon,
    fetchCommonSuccess,
    fetchCommonError,
} = commonSlice.actions;
export const selectGenres = state => state.common.genresList;
export const selectLoading = state => state.common.loading;

export default commonSlice.reducer;