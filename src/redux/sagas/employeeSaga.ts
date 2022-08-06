import {
  call,
  put,
  takeLeading,
} from "redux-saga/effects";
import {
  createEmployeeSuccess,
  deleteEmployeeSuccess,
  getAllEmployeesStart,
  getAllEmployeesSuccess,
  updateEmployeesSuccess,
} from "../actionCreaters/actionCreaters";
import {
  createEmployeeStart,
  deleteEmployeeStart,
  Types,
  updateEmployeeStart,
} from "../actionCreaters/Types";
import {
  createEmployeeFromApi,
  deleteEmployeeFromApi,
  getAllEmployeesFromApi,
  updateEmployeeFromApi,
} from "../api/api";

import { useDispatch } from "react-redux"
import { Dispatch } from "redux";





function* getAllEmployeesSaga() {
  try {
    const { response, error } = yield call(getAllEmployeesFromApi);
    if (response) {
      console.log("res");
      yield put(getAllEmployeesSuccess(response.data));
    } else {
      yield put({ type: Types.GET_EMPLOYEES_FAIL, payload: error });
      // console.log("error", error);
    }
  } catch (error) {
    yield put({ type: Types.GET_EMPLOYEES_FAIL, payload: error });
  }
}

function* createEmployeesSaga({ payload }: createEmployeeStart) {
  const { response, error } = yield call(createEmployeeFromApi, payload);
  if (response) {
    yield put(createEmployeeSuccess(response));
    yield put(getAllEmployeesStart())
    // console.log("response Saga", response);
  } else {
    yield put({ type: Types.CREATE_EMPLOYEES_FAIL, payload: error });
    // console.log("error Saga", error);
  }
}

function* updateEmployeesSaga({ payload }: updateEmployeeStart) {
  try {
    
    const { response, error } = yield call(updateEmployeeFromApi, payload);
    if (response) {
      console.log("res",response)
      yield put(updateEmployeesSuccess(response));
      yield put(getAllEmployeesStart())
    } else {
      yield put({ type: Types.UPDATE_EMPLOYEES_FAIL, payload: error });
      console.log("error", error);
    }
  } catch (error) {
    yield put({ type: Types.UPDATE_EMPLOYEES_FAIL, payload: error });
  }
}

function* deletEmployeesSaga({ payload }: deleteEmployeeStart) {

  try {
    
    const { response, error } = yield call(deleteEmployeeFromApi, payload);
    if (response) {
      yield put(deleteEmployeeSuccess(response));
      console.log("response", response);
      yield put(getAllEmployeesStart())
    } else {
      yield put({ type: Types.DELETE_EMPLOYEES_FAIL, payload: error });
      console.log("error", error);
    }
  } catch (error) {
    console.log("catch", error);
    yield put({ type: Types.DELETE_EMPLOYEES_FAIL, payload: error });
  }
}

export default function* rootSaga() {
  yield takeLeading(Types.GET_EMPLOYEES_START, getAllEmployeesSaga);
  yield takeLeading(Types.CREATE_EMPLOYEES_START, createEmployeesSaga);
  yield takeLeading(Types.UPDATE_EMPLOYEES_START, updateEmployeesSaga);
  yield takeLeading(Types.DELETE_EMPLOYEES_START, deletEmployeesSaga);
}
