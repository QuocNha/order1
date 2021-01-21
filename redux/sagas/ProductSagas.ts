import { call, put, takeLatest } from "redux-saga/effects";

import { actionTypes, loadDataFailure, loadDataSuccess } from "../actions/ProductActions";

import getEmployee from "../../constant.config.api/getAllUser"
function* loadDataSaga(name:any) {
  console.log("name",name)
  try {
    console.log(name)
    const response = yield call(getEmployee);
    // alert("Vao roi");
    yield put(loadDataSuccess(response));
  } catch (err) {
    yield put(loadDataFailure(err));
  }
}

const sagas = [takeLatest(actionTypes.LOAD_DATA1, loadDataSaga),];

export default sagas;
