import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getApiData } from "./../../getApiData";
import store from "./../../../store";
import {
    fetchListError,
    fetchListSuccess,
    setActivePage,
} from "../../listSlice";
import apiKey from "./../../../common/apiKey";
import language from "./../../../common/language";

function* fetchListHandler() {
    const page = store.getState().list.activePage;
    const activePath = store.getState().list.activePath;

    try {
        yield delay(500);
        const data = yield call(() => getApiData(
            `https://api.themoviedb.org/3${activePath}?api_key=${apiKey}&language=${language}&page=${page}`
        ));
        yield put(fetchListSuccess(data));
    } catch (error) {
        yield put(fetchListError());
        yield call(alert, "Coś poszło nie tak");
    }
};

export function* watchSetActivePage() {
    yield takeEvery(setActivePage.type, fetchListHandler);
};