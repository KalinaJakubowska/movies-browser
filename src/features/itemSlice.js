import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "item",
    initialState: {
        itemData: [],
        extraData: [],
        loading: true,
        itemId: undefined,
        activeItemPath: "",
        activeExtraPath: "",
        error: false,
    },
    reducers: {
        setItemId: (state, { payload: id }) => {
            state.loading = true;
            state.itemId = id;
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
        setActivePath: (state, { payload: { path1, path2 } }) => {
            state.activeItemPath = path1;
            state.activeExtraPath = path2;
        },
        resetState: (state) => {
            state.itemData = [];
            state.extraData = [];
            state.itemId = undefined;
            state.activeItemPath = "";
            state.activeExtraPath = "";
            state.loading = true;
            state.error = false;
        },
    },
});

export const {
    setItemId,
    fetchItemSuccess,
    fetchItemError,
    setActivePath,
    resetState,
} = itemSlice.actions;
export const selectItemData = state => state.item.itemData;
export const selectExtraData = state => state.item.extraData;
export const selectLoading = state => state.item.loading;
export const selectError = state => state.item.error;

export default itemSlice.reducer;