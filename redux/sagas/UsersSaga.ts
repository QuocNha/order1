import { call, put, takeLatest } from "redux-saga/effects";
import { actionUser,loadDataSuccess ,loadDataFailure,logOutFailure,logOutSuccess} from "../actions/UserAcctions";
import getEmployee from "../../constant.config.api/resignUser";
import loginUser from "../../constant.config.api/loginUser";
import logOut from "../../constant.config.api/logOut";
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
    console.log(typeof response.status)
    if(response.status===200){
      yield put(loadDataSuccess(response));
    Router.push('/components/Layout/Layout');    
    }else if(response.status===400){
      yield put(loadDataFailure(response.data.errors[0]));
      console.log(typeof response.status)  
    }
    
   
    NProgress.done();
  } catch (err) {
    yield put(loadDataFailure(err));
  }
}
function* loadLogOut() {
  try{
    const response = yield call(logOut);
    console.log("response",response)
    yield put(logOutSuccess(response));
    Router.push("/")
  }catch(error){
    yield put(logOutFailure(error))
  }
}
const sagas = [
  takeLatest(actionUser.LOAD_RESIGN, loadResign),
  takeLatest(actionUser.LOAD_LOGIN, loadLogin),
  takeLatest(actionUser.LOAD_OUT, loadLogOut)
];

export default sagas;