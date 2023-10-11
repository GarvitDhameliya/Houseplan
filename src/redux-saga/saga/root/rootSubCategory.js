import { takeLatest } from "redux-saga/effects";
import { handleGetSubCatgory } from "../subCategory/manageSubCategory";
import { GET_SUB_CATEGORY_PROGRESS } from "../../subCategory/action/action";


// GET sub category data
export function* getSubCategoySaga() {
  yield takeLatest(GET_SUB_CATEGORY_PROGRESS,handleGetSubCatgory );
}

