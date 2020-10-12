import { createSlice } from "@reduxjs/toolkit";
import listPaths from "../common/listPaths";

const itemSlice = createSlice({
    name: "item",
    initialState: {
        itemData: [],
        loading: true,
        itemId: undefined,
        activePath: "",
    },
    reducers: {
        setItemId: (state, { payload: id }) => {
            state.loading = true;
            state.itemId = id;
        },
        fetchItemSuccess: (state, { payload: itemData }) => {
            state.itemData = itemData;
            state.loading = false;
        },
        fetchItemError: state => {
            state.loading = false;
        },
        setActivePath: (state, {payload: name}) => {
            state.activePath = listPaths[name];
        },
        resetState: (state) => {
            state.itemData = [];
            state.itemId = undefined;
            state.activePath = "";
            state.loading = true;
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
export const selectLoading = state => state.item.loading;

export default itemSlice.reducer;