import { call, put, takeLatest } from "redux-saga/effects";
import { actionUser,loadDataSuccess ,loadDataFailure} from "../actions/UserAcctions";
import getEmployee from "../../constant.config.api/resignUser"
function* loadResign(name:any) {
    try {
      const response = yield call(getEmployee,name.payload);
      // alert("Vao roi");
      yield put(loadDataSuccess(response));
    } catch (err) {
      yield put(loadDataFailure(err));
    }
}
const sagas = [takeLatest(actionUser.LOAD_RESIGN, loadResign)];

export default sagas;