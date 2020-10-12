import { all } from "redux-saga/effects";
import { watchSetItemId } from "./features/itemSaga";
import { watchSetActivePage } from "./features/listSaga"

export default function* rootSaga() {
    yield all([
        watchSetActivePage(),
        watchSetItemId(),
    ]);
};