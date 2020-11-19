import { createSlice } from "@reduxjs/toolkit";

const sunsetSlice = createSlice({
    name: "sunset",
    initialState: {
        loading: true,
        sunData: [],
        error: false,
        isNormalTheme: localStorage.getItem("theme")
            ? JSON.parse(localStorage.getItem("theme"))
            : true,
        isAutoTheme: localStorage.getItem("autoTheme")
            ? JSON.parse(localStorage.getItem("autoTheme"))
            : true,
    },
    reducers: {
        fetchSunset: state => {
            state.loading = true;
        },
        fetchSunsetSuccess: (state, { payload: sunData }) => {
            state.sunData = sunData;
            state.loading = false;
        },
        fetchSunsetError: state => {
            state.loading = false;
            state.error = true;
            state.isAutoTheme = false;
        },
        setNormalTheme: (state, { payload }) => {
            state.isNormalTheme = payload;
        },
        setAutoTheme: (state, { payload }) => {
            state.isAutoTheme = payload;
        },
    },
});

export const {
    fetchSunset,
    fetchSunsetSuccess,
    fetchSunsetError,
    setNormalTheme,
    setAutoTheme,
} = sunsetSlice.actions;
export const selectSunData = state => state.sunset.sunData;
export const selectLoading = state => state.sunset.loading;
export const selectError = state => state.sunset.error;
export const selectTheme = state => state.sunset.isNormalTheme;
export const selectAutoTheme = state => state.sunset.isAutoTheme;

export default sunsetSlice.reducer;