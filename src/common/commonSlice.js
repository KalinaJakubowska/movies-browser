import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
    name: "common",
    initialState: {
        genresList: [],
        loading: true,
    },
    reducers: {
        fetchCommon: state => {
            state.loading = true;
        },
        fetchCommonSuccess: (state, { payload: genres }) => {
            state.genresList = genres.genres.map(genre => ({ ...genre, enabled: false }));
            state.loading = false;
        },
        fetchCommonError: state => {
            state.loading = false;
        },
        switchGenreEnabled: ({ genresList }, { payload: id }) => {
            const index = genresList.findIndex(genre => genre.id === id);
            genresList[index].enabled = !genresList[index].enabled;
        },
    },
});

export const {
    fetchCommon,
    fetchCommonSuccess,
    fetchCommonError,
    switchGenreEnabled,
} = commonSlice.actions;
export const selectGenres = state => state.common.genresList;
export const selectLoading = state => state.common.loading;
export const selectEnabledGenres = state => state.common.genresList
    .filter(genre => genre.enabled && genre.id)
    .map(genre => genre.id);

export default commonSlice.reducer;