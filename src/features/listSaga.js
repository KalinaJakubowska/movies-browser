import { call, put, select, takeLatest } from "redux-saga/effects";
import { getApiData } from "../getApiData";
import {
    fetchListError,
    fetchListSuccess,
    fetchList,
} from "./listSlice";
import { apiKey, language, apiBaseLink } from "./../common/commonValues";
import { selectEnabledGenres } from "../common/commonSlice";

function* fetchListHandler({ payload: { page, urlQuery, type } }) {
    const enabledGenres = yield select(selectEnabledGenres);

    const activePath = type === "movies"
        ? urlQuery
            ? `${apiBaseLink}search/movie${apiKey}${language}&query=${urlQuery}&page=${page}`
            : `${apiBaseLink}discover/movie${apiKey}${language}&sort_by=popularity.desc&page=${page}&with_genres=${enabledGenres}`
        : urlQuery
            ? `${apiBaseLink}search/person${apiKey}${language}&query=${urlQuery}&page=${page}`
            : `${apiBaseLink}person/popular${apiKey}${language}&page=${page}`

    try {
        const data = yield call(getApiData, activePath);
        yield put(fetchListSuccess(data));
    } catch (error) {
        yield put(fetchListError());
    }
};

export function* watchFetchList() {
    yield takeLatest(fetchList.type, fetchListHandler);
};