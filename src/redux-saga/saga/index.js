import { all } from "@redux-saga/core/effects";
import { getCategoySaga } from "./root/rootCategory";

export function* rootSaga() {
  yield all([getCategoySaga()]);
}
