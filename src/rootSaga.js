import { all } from "redux-saga/effects";
import { watchfetchCommon } from "./common/commonSaga";
import { watchSetItemId } from "./features/itemSaga";
import { watchSetActivePath } from "./features/listSaga"

export default function* rootSaga() {
    yield all([
        watchSetActivePath(),
        watchSetItemId(),
        watchfetchCommon(),
    ]);
};