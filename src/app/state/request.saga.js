import { call, takeEvery, put } from "redux-saga/effects";
import { SUCCESS, FAILURE, REQUEST } from "app/utils/constants";

function* requestSaga(action) {
  try {
    const response = yield call(action.payload.api, action.payload.data);
    if (response.status >= 400) {
      yield put({ type: action.payload.action + FAILURE });
    } else if (response.status === 200 || response.status === 201) {
      yield put({
        type: action.payload.action + SUCCESS,
        payload: response.data,
      });
      yield put({ type: REQUEST + SUCCESS });
    }
  } catch (error) {
    yield put({ type: action.payload.action + FAILURE });
    yield put({ type: REQUEST + FAILURE });
  }
}

export default function* watcher() {
  yield takeEvery(REQUEST, requestSaga);
}
