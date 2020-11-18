import { all, takeEvery, call, put } from "redux-saga/effects";
import { getApiData } from "../getApiData";
import {
    fetchCommonError,
    fetchCommonSuccess,
    fetchCommon
} from "./commonSlice";
import {
    fetchSunsetError,
    fetchSunsetSuccess,
} from "./sunsetSlice";
import { apiKey, language, apiBaseLink } from "./commonValues";

function* fetchGenresHandler() {
    try {
        const genres = yield call(
            getApiData,
            `${apiBaseLink}genre/movie/list${apiKey}${language}`
        );
        yield put(fetchCommonSuccess(genres));
    } catch (error) {
        yield put(fetchCommonError());
    }
};

function* fetchSunsetHandler() {
    try {
        const sunData = yield call(
            getApiData,
            `https://api.sunrise-sunset.org/json?lat=52.1301600&lng=21.0203400&date=today&formatted=0`
        );
        yield put(fetchSunsetSuccess(sunData.results));
    } catch (error) {
        yield put(fetchSunsetError());
    }
};

function* fetchCommonHandler() {
    yield all([
        call(fetchGenresHandler),
        call(fetchSunsetHandler),
    ]);
};

export function* watchfetchCommon() {
    yield takeEvery(fetchCommon.type, fetchCommonHandler);
};