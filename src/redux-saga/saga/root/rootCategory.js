import { takeLatest } from "redux-saga/effects";
import { GET_CATEGORY_PROGRESS } from "../../category/action/action";
import { handleGetCatgory } from "../category/manageCategory";

// GET - COE School data
export function* getCategoySaga() {
  yield takeLatest(GET_CATEGORY_PROGRESS, handleGetCatgory);
}
