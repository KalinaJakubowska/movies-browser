import { takeEvery, call, put } from "redux-saga/effects";
import { getApiData } from "../getApiData";
import store from "../store";
import {
    fetchListError,
    fetchListSuccess,
    setActivePath,
} from "./listSlice";

function* fetchListHandler() {
    const activePath = store.getState().list.activePath;

    try {
        const data = yield call(() => getApiData(activePath));
        yield put(fetchListSuccess(data));
    } catch (error) {
        yield put(fetchListError());
    }
};

export function* watchSetActivePath() {
    yield takeEvery(setActivePath.type, fetchListHandler);
};