import { all, fork } from "redux-saga/effects";
 import Product from "./ProductSagas";

export default function* rootSaga() {
  yield all([...Product]);
}