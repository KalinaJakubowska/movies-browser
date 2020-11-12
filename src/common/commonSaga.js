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
        const genres = yield call(
            getApiData,
            `https://api.themoviedb.org/3/genre/movie/list${apiKey}${language}`
        );
        const sunData = yield call(
            getApiData,
            `https://api.sunrise-sunset.org/json?lat=52.1301600&lng=21.0203400&date=today&formatted=0`
        );
        yield put(fetchCommonSuccess({ genres, sunData }));
    } catch (error) {
        yield put(fetchCommonError());
    }
};

export function* watchfetchCommon() {
    yield takeEvery(fetchCommon.type, fetchCommonHandler);
};