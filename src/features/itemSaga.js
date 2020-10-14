import { takeEvery, call, put, delay } from "redux-saga/effects";
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
        yield delay(500);
        const itemData = yield call(() => getApiData(activeItemPath));
        const extraData = yield call(() => getApiData(activeExtraPath));
        yield put(fetchItemSuccess({ itemData, extraData }));
    } catch (error) {
        yield put(fetchItemError());
        yield call(alert, error);
    }
};

export function* watchSetItemId() {
    yield takeEvery(setItemId.type, fetchItemHandler);
};