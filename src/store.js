import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/MoviesPage/moviesSlice";
import createSagaMiddleware from "redux-saga";
import { watchFetchPopularMovies } from "./features/movies/MoviesPage/moviesSaga"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchPopularMovies);

export default store;