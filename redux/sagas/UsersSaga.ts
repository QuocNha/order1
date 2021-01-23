import { call, put, takeLatest } from "redux-saga/effects";
import { actionUser,loadDataSuccess ,loadDataFailure} from "../actions/UserAcctions";
import getEmployee from "../../constant.config.api/resignUser";
import loginUser from "../../constant.config.api/loginUser";
import NProgress from 'nprogress';
import Router from 'next/router'

function* loadResign(name:any) {
    try {
      const response = yield call(getEmployee,name.payload);
      // alert("Vao roi");
      yield put(loadDataSuccess(response));
     
    } catch (err) {
      yield put(loadDataFailure(err));
      NProgress.done();

    }
}
function* loadLogin(user:any) {
  try {
    const response = yield call(loginUser,user.payload);
    // alert("Vao roi");
    yield put(loadDataSuccess(response));
    Router.push('/components/Layout/Layout');
    alert("vao roi")
    NProgress.done();
  } catch (err) {
    yield put(loadDataFailure(err));
  }
}
const sagas = [takeLatest(actionUser.LOAD_RESIGN, loadResign),takeLatest(actionUser.LOAD_LOGIN, loadLogin)];

export default sagas;