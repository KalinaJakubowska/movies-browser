import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./features/listSlice";
import itemReducer from "./features/itemSlice";
import commonReducer from "./common/commonSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        list: listReducer,
        item: itemReducer,
        common: commonReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;