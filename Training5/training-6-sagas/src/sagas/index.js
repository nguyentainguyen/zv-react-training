import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchTodos);
    const todo = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", todo });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

function fetchTodos() {
  return axios({
    method: "get",
    url: `http://localhost:9000/todos`
  });
}
