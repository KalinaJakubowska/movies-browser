import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./features/listSlice";
import movieReducer from "./features/movies/MoviePage/movieSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        list: listReducer,
        movie: movieReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;