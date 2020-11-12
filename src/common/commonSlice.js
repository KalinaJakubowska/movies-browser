import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
    name: "common",
    initialState: {
        genresList: [],
        loading: true,
        isNormalTheme: localStorage.getItem("theme")
            ? JSON.parse(localStorage.getItem("theme"))
            : true,
        isAutoTheme: localStorage.getItem("autoTheme")
            ? JSON.parse(localStorage.getItem("autoTheme"))
            : true,
        sunData: [],
    },
    reducers: {
        fetchCommon: state => {
            state.loading = true;
        },
        fetchCommonSuccess: (state, { payload: { genres, sunData } }) => {
            state.genresList = genres.genres.map(genre => ({ ...genre, enabled: false }));
            state.sunData = sunData.results;
            state.loading = false;
        },
        fetchCommonError: state => {
            state.loading = false;
        },
        setNormalTheme: (state, { payload }) => {
            state.isNormalTheme = payload;
        },
        setAutoTheme: (state, { payload }) => {
            state.isAutoTheme = payload;
        },
        switchGenreEnabled: ({ genresList }, { payload: id }) => {
            const index = genresList.findIndex(genre => genre.id === id);
            genresList[index].enabled = !genresList[index].enabled;
        },
        resetEnabledGenres: (state) => {
            state.genresList = state.genresList.map(genre => ({ ...genre, enabled: false }))
        },
    },
});

export const {
    fetchCommon,
    fetchCommonSuccess,
    fetchCommonError,
    setNormalTheme,
    setAutoTheme,
    switchGenreEnabled,
    resetEnabledGenres,
} = commonSlice.actions;
export const selectGenres = state => state.common.genresList;
export const selectLoading = state => state.common.loading;
export const selectTheme = state => state.common.isNormalTheme;
export const selectAutoTheme = state => state.common.isAutoTheme;
export const selectSunData = state => state.common.sunData;

export default commonSlice.reducer;