import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getPopularMovies } from "./getPopularMovies";
import {
    fetchPopularMoviesError,
    fetchPopularMoviesSuccess,
    setActivePage,
} from "./moviesSlice";

function* fetchPopularMoviesHandler() {
    try {
        yield delay(500);
        const popularMovies = yield call(getPopularMovies);
        yield put(fetchPopularMoviesSuccess(popularMovies));
    } catch (error) {
        yield put(fetchPopularMoviesError());
        yield call(alert, "Coś poszło nie tak");
    }
};

export function* watchSetActivePage() {
    yield takeEvery(setActivePage.type, fetchPopularMoviesHandler);
};