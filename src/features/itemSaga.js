import { takeEvery, call, put, delay } from "redux-saga/effects";
import store from "../store";
import { getApiData } from "./getApiData";
import {
    fetchItemError,
    fetchItemSuccess,
    setItemId,
} from "./itemSlice";
import language from "../common/language";
import apiKey from "../common/apiKey";

function* fetchItemHandler() {
    const id = store.getState().item.itemId;
    const activePath = store.getState().item.activePath;
    try {
        yield delay(500);
        const itemData = yield call(() => getApiData(
            `https://api.themoviedb.org/3${activePath}/${id}?api_key=${apiKey}&language=${language}`
        ));
        yield put(fetchItemSuccess(itemData));
    } catch (error) {
        yield put(fetchItemError());
        yield call(alert, "Coś poszło nie tak");
    }
};

export function* watchSetItemId() {
    yield takeEvery(setItemId.type, fetchItemHandler);
};