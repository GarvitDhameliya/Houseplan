import { call, put } from "redux-saga/effects";
import { getSubCategory } from "../../subCategory/api/api";
import {
  GET_SUB_CATEGORY_ERROR,
  GET_SUB_CATEGORY_SUCCESS,
} from "../../subCategory/action/action";

export function* handleGetSubCatgory(action) {
  const res = yield call(getSubCategory, action);
  const status = res.status;
  const data = res.data.data;
  try {
    if (status === 200) {
      yield put({ type: GET_SUB_CATEGORY_SUCCESS, data });
    } else {
      yield put({ type: GET_SUB_CATEGORY_ERROR, data });
    }
  } catch (error) {
    yield put({ type: GET_SUB_CATEGORY_ERROR, error });
  }
}
