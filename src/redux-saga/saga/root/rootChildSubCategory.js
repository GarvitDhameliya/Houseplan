import { takeLatest } from "redux-saga/effects";
import { GET_CHILD_SUB_CATEGORY_PROGRESS } from "../../childSubCategory/action/action";
import { handleGetChildSubCatgory } from "../childSubCategory.js/manageChildSubCategory";

// GET category data
export function* getChildSubCategoySaga() {
  yield takeLatest(GET_CHILD_SUB_CATEGORY_PROGRESS, handleGetChildSubCatgory);
}

