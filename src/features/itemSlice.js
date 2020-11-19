import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "item",
    initialState: {
        itemData: [],
        extraData: [],
        loading: true,
        error: false,
    },
    reducers: {
        fetchItem: state => {
            state.loading = true;
        },
        fetchItemSuccess: (state, { payload: { itemData, extraData } }) => {
            state.itemData = itemData;
            state.extraData = extraData;
            state.loading = false;
            state.error = false;
        },
        fetchItemError: state => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    fetchItem,
    fetchItemSuccess,
    fetchItemError,
    setActivePath,
} = itemSlice.actions;
export const selectItemData = state => state.item.itemData;
export const selectExtraData = state => state.item.extraData;
export const selectLoading = state => state.item.loading;
export const selectError = state => state.item.error;

export default itemSlice.reducer;