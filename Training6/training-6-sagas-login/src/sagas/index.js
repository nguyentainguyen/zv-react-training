import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

function* workerLogin({ values }) {
  try {
    const url = "http://localhost:9000/login";
    const response = yield call(axios.post, url, values);
    if (!response.data.token) {
      yield put({ type: "LOGIN_ERROR", error: response.data.error });
    } else {
      yield put({ type: "LOGIN_SUCCESS", token: response.data.token });
    }
  } catch (error) {
    yield put({ type: "LOGIN_ERROR", error });
  }
}

function* workerGetUser({ token }) {
  try {
    const url = "http://localhost:9000/api/users/my";
    const response = yield call(() =>
      axios.get(url, {
        headers: { Authorization: `Bearer ${token}` }
      })
    );
    const payload = response.data;
    const loaded = true;
    yield put({ type: "GET_USER", payload, loaded });
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeLatest("LOGIN_REQUESTING", workerLogin);
  yield takeLatest("GET_USER", workerGetUser);
}
