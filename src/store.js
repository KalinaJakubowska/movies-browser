import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./features/listSlice";
import itemReducer from "./features/itemSlice";
import searchReducer from "./features/Search/searchSlice";
import commonReducer from "./common/commonSlice";
import sunsetReducer from "./common/sunsetSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        list: listReducer,
        item: itemReducer,
        common: commonReducer,
        search: searchReducer,
        sunset: sunsetReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
    localStorage.setItem("theme", store.getState().common.isNormalTheme);
    localStorage.setItem("autoTheme", store.getState().common.isAutoTheme);
});

export default store;