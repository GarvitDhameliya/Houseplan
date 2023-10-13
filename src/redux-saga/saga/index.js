import { all } from "@redux-saga/core/effects";
import { getCategoySaga, postCategoySaga } from "./root/rootCategory";
import { getSubCategoySaga } from "./root/rootSubCategory";
import { getChildSubCategoySaga } from "./root/rootChildSubCategory";

export function* rootSaga() {
  yield all([getCategoySaga(), getSubCategoySaga(), getChildSubCategoySaga(),postCategoySaga()]);
}
