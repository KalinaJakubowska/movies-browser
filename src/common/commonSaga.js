import { takeEvery, call, put, all } from "redux-saga/effects";
import { getApiData } from "../getApiData";
import {
    fetchCommonError,
    fetchCommonSuccess,
    fetchCommon
} from "./commonSlice";
import { apiKey, language, apiBaseLink } from "./commonValues";

function* fetchCommonHandler() {
    try {

        const { genres, sunData } = yield all({
            genres: call(
                getApiData,
                `${apiBaseLink}genre/movie/list${apiKey}${language}`
            ),
            sunData: call(
                getApiData,
                `https://api.sunrise-sunset.org/json?lat=52.1301600&lng=21.0203400&date=today&formatted=0`
            ),
        })
        yield put(fetchCommonSuccess({ genres, sunData }));
    } catch (error) {
        yield put(fetchCommonError());
    }
};

export function* watchfetchCommon() {
    yield takeEvery(fetchCommon.type, fetchCommonHandler);
};