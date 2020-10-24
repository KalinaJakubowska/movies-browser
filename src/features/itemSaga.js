import { takeEvery, call, put } from "redux-saga/effects";
import store from "../store";
import { getApiData } from "../getApiData";
import {
    fetchItemError,
    fetchItemSuccess,
    setItemId,
} from "./itemSlice";

function* fetchItemHandler() {
    const activeItemPath = store.getState().item.activeItemPath;
    const activeExtraPath = store.getState().item.activeExtraPath;

    try {
        const itemData = yield call(() => getApiData(activeItemPath));
        const extraData = yield call(() => getApiData(activeExtraPath));
        yield put(fetchItemSuccess({ itemData, extraData }));
    } catch (error) {
        yield put(fetchItemError());
    }
};

export function* watchSetItemId() {
    yield takeEvery(setItemId.type, fetchItemHandler);
};