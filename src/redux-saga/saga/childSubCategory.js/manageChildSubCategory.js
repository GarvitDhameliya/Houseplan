import { call, put } from "redux-saga/effects";
import { GET_CHILD_SUB_CATEGORY_ERROR, GET_CHILD_SUB_CATEGORY_SUCCESS } from '../../childSubCategory/action/action'
import { getChildSubCategory } from "../../childSubCategory/api/api";

// GET School detail
export function* handleGetChildSubCatgory(action) {
  try {
    const res = yield call(getChildSubCategory, action);
    const status = res.status;
    const data = res.data.data;
    if (status === 200) {
      yield put({ type: GET_CHILD_SUB_CATEGORY_SUCCESS, data });
    } else {
      yield put({ type: GET_CHILD_SUB_CATEGORY_ERROR, data });
    }
  } catch (e) {
    yield put({ type: GET_CHILD_SUB_CATEGORY_ERROR, e });
  }
}
