import { call, put, takeLatest } from "redux-saga/effects";

import { actionTypes, loadDataFailure, loadDataSuccess } from "../actions/ProductActions";
import { actionUser } from "../actions/UserAcctions";
import getEmployee from "../../constant.config.api/getAllUser"
import getAllProduct from "../../constant.config.api/getAllProduct"
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
function* loadProduct(payload:any) {
  try {
    const response = yield call(getAllProduct,payload.page,payload.limit);
    // alert("Vao roi");
    console.log("dataRoDuct,",response)
    yield put(loadDataSuccess(response.data.data));
  } catch (err) {
    yield put(loadDataFailure(err));
  }
}

const sagas = [takeLatest(actionTypes.LOAD_DATA, loadProduct)];

export default sagas;
