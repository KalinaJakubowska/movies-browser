import { all } from "redux-saga/effects";
import { watchSetMovie } from "./features/movies/MoviePage/movieSaga";
import { watchSetActivePage } from "./features/movies/MoviesPage/moviesSaga"

export default function* rootSaga() {
    yield all([
        watchSetActivePage(),
        watchSetMovie(),
    ]);
};