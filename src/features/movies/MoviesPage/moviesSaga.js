import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getPopularMovies } from "./getPopularMovies";
import {
    fetchPopularMovies,
    fetchPopularMoviesError,
    fetchPopularMoviesSuccess
} from "./moviesSlice";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const popularMovies = yield call(getPopularMovies);
        yield put(fetchPopularMoviesSuccess(popularMovies.results));
    } catch (error) {
        yield put(fetchPopularMoviesError());
        yield call(alert, "Coś poszło nie tak");
    }
};

export function* watchFetchPopularMovies() {
    yield takeEvery(fetchPopularMovies.type, fetchExampleTasksHandler);
}