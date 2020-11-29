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
        setIsNormalTheme: (state, { payload }) => {
            state.isNormalTheme = payload;
        },
        setIsAutoTheme: (state, { payload }) => {
            state.isAutoTheme = payload;
        },
    },
});

export const {
    fetchSunset,
    fetchSunsetSuccess,
    fetchSunsetError,
    setIsNormalTheme,
    setIsAutoTheme,
} = sunsetSlice.actions;
export const selectSunData = state => state.sunset.sunData;
export const selectLoading = state => state.sunset.loading;
export const selectError = state => state.sunset.error;
export const selectIsNormalTheme = state => state.sunset.isNormalTheme;
export const selectIsAutoTheme = state => state.sunset.isAutoTheme;

export default sunsetSlice.reducer;