import { all, fork } from "redux-saga/effects";
 import Product from "./ProductSagas";
 import User from "./UsersSaga";

export default function* rootSaga() {
  yield all([
    ...Product,
    ...User
  ]);
}