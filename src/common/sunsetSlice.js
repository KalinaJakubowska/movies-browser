import { createSlice } from "@reduxjs/toolkit";

const sunsetSlice = createSlice({
    name: "sunset",
    initialState: {
        loading: true,
        sunData: [],
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
        },
    },
});

export const {
    fetchSunset,
    fetchSunsetSuccess,
    fetchSunsetError,
} = sunsetSlice.actions;
export const selectSunData = state => state.sunset.sunData;

export default sunsetSlice.reducer;