import { call, put, delay, takeLatest, debounce, takeEvery } from "redux-saga/effects";
import { getApiData } from "./../../getApiData";
import store from "./../../store";
import {
    fetchSearchError,
    fetchSearchSuccess,
    setActiveSearchPath,
} from "./searchSlice";

function* fetchSearchHandler() {
    const activePath = store.getState().search.activePath;

    try {
        const data = yield call(() => getApiData(activePath));
        yield put(fetchSearchSuccess(data));
    } catch (error) {
        yield put(fetchSearchError());
    }
};

export function* watchSetActiveSearchPath() {
    yield debounce(400, setActiveSearchPath.type, fetchSearchHandler);
};