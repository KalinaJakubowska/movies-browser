import { takeEvery, call, put, all, delay } from "redux-saga/effects";
import { getApiData } from "../getApiData";
import { fetchItemError, fetchItemSuccess, fetchItem } from "./itemSlice";
import { apiBaseLink, language, apiKey } from "./../common/commonValues";

function* fetchItemHandler({ payload: { id, type } }) {
  const activeItemPath =
    type === "movie"
      ? `${apiBaseLink}movie/${id}${apiKey}${language}`
      : `${apiBaseLink}person/${id}${apiKey}${language}`;

  const activeExtraPath =
    type === "movie"
      ? `${apiBaseLink}movie/${id}/credits${apiKey}`
      : `${apiBaseLink}person/${id}/movie_credits${apiKey}${language}`;

  try {
    yield delay(200);
    const [itemData, extraData] = yield all([
      call(getApiData, activeItemPath),
      call(getApiData, activeExtraPath),
    ]);
    yield put(fetchItemSuccess({ itemData, extraData }));
  } catch (error) {
    yield put(fetchItemError());
  }
}

export function* watchFetchItem() {
  yield takeEvery(fetchItem.type, fetchItemHandler);
}
