import { all } from "redux-saga/effects";
import { watchfetchCommon } from "./common/commonSaga";
import { watchSetItemId } from "./features/itemSaga";
import { watchSetActivePage } from "./features/listSaga"

export default function* rootSaga() {
    yield all([
        watchSetActivePage(),
        watchSetItemId(),
        watchfetchCommon(),
    ]);
};