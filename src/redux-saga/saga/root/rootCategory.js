import { takeLatest } from "redux-saga/effects";
import { GET_CATEGORY_PROGRESS, POST_CATEGORY_PROGRESS } from "../../category/action/action";
import { handleGetCatgory, handlePostCatgory } from "../category/manageCategory";

// GET category data
export function* getCategoySaga() {
  yield takeLatest(GET_CATEGORY_PROGRESS, handleGetCatgory);
}

// POST category data
export function* postCategoySaga() {
  yield takeLatest(POST_CATEGORY_PROGRESS, handlePostCatgory);
}