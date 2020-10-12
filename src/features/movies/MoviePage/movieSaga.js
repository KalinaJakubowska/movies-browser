import { takeEvery, call, put, delay } from "redux-saga/effects";
import store from "../../../store";
import { getApiData } from "./../../getApiData";
import {
    fetchMovieError,
    fetchMovieSuccess,
    setMovie,
} from "./movieSlice";

function* fetchMovieHandler() {
    const id = store.getState().movie.movieId;
    try {
        yield delay(500);
        const movieData = yield call(() => getApiData(`https://api.themoviedb.org/3/movie/${id}?api_key=c09290276e151ca70a95c0fe106ed759&language=en-US`));
        yield put(fetchMovieSuccess(movieData));
    } catch (error) {
        yield put(fetchMovieError());
        yield call(alert, "Coś poszło nie tak");
    }
};

export function* watchSetMovie() {
    yield takeEvery(setMovie.type, fetchMovieHandler);
};