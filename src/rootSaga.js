import { all } from "redux-saga/effects";
import { watchfetchCommon } from "./common/commonSaga";
import { watchSetItemId } from "./features/itemSaga";
import { watchFetchList } from "./features/listSaga";
import { watchSetActiveSearchPath } from "./features/Search/searchSaga";

export default function* rootSaga() {
    yield all([
        watchSetActiveSearchPath(),
        watchFetchList(),
        watchSetItemId(),
        watchfetchCommon(),
    ]);
};