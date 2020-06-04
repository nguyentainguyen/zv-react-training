import { takeLatest, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* workerFetchTodo() {
  try {
    const response = yield call(fetchTodos);
    const todo = response.data;

    yield put({ type: "API_CALL_SUCCESS", todo });
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

export function* workerDeleteTodo({ id }) {
  try {
    const uri = `http://localhost:9000/todos/${id}`;
    const response = yield call(axios.delete, uri);
    yield put({
      type: "DELETE_TODO_SUCCESS",
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
}

export function* workerAddTodo(name) {
  try {
    const uri = `http://localhost:9000/todos/`;
    const response = yield call(axios.post, uri, name.value);
    yield put({
      type: "ADD_TODO_SUCCESS",
      payload: response.data
    });
    const reload = yield call(fetchTodos);
    const todo = reload.data;

    yield put({ type: "API_CALL_SUCCESS", todo });
  } catch (error) {
    console.log(error);
  }
}

export function* workerEditTodo({ id, name }) {
  try {
    const uri = `http://localhost:9000/todos/${id}`;
    const response = yield call(axios.put, uri, { name });
    yield put({
      type: "EDIT_TODO_SUCCESS",
      payload: response.data
    });
  } catch (e) {
    console.log(e);
  }
}

function fetchTodos() {
  return axios({
    method: "get",
    url: `http://localhost:9000/todos`
  });
}

export default function* mySaga() {
  yield takeLatest("API_CALL_REQUEST", workerFetchTodo);
  yield takeEvery("DELETE_TODO", workerDeleteTodo);
  yield takeLatest("ADD_TODO", workerAddTodo);
  yield takeLatest("EDIT_TODO", workerEditTodo);
}
