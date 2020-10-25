import { takeEvery, call, put } from "redux-saga/effects";
import { getApiData } from "../getApiData";
import {
    fetchCommonError,
    fetchCommonSuccess,
    fetchCommon
} from "./commonSlice";
import apiKey from "./apiKey";
import language from "./language";

function* fetchCommonHandler() {
    try {
        const data = yield call(() => getApiData(
            `https://api.themoviedb.org/3/genre/movie/list${apiKey}${language}`
        ));
        yield put(fetchCommonSuccess(data));
    } catch (error) {
        yield put(fetchCommonError());
        yield call(alert, "Coś poszło nie tak");
    }
};

export function* watchfetchCommon() {
    yield takeEvery(fetchCommon.type, fetchCommonHandler);
};