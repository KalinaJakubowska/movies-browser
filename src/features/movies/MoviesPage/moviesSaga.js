import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getApiData } from "./../../getApiData";
import store from "./../../../store";
import {
    fetchPopularMoviesError,
    fetchPopularMoviesSuccess,
    setActivePage,
} from "./moviesSlice";

function* fetchPopularMoviesHandler() {
    const page = store.getState().movies.activePage;
    try {
        yield delay(500);
        const popularMovies = yield call(() => getApiData(`https://api.themoviedb.org/3/movie/popular?api_key=c09290276e151ca70a95c0fe106ed759&language=en-US&page=${page}`));
        yield put(fetchPopularMoviesSuccess(popularMovies));
    } catch (error) {
        yield put(fetchPopularMoviesError());
        yield call(alert, "Coś poszło nie tak");
    }
};

export function* watchSetActivePage() {
    yield takeEvery(setActivePage.type, fetchPopularMoviesHandler);
};