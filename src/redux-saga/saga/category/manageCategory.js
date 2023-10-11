import { call, put } from "redux-saga/effects";
import { getCategory } from "../../category/api/api";
import {
  GET_CATEGORY_ERROR,
  GET_CATEGORY_SUCCESS,
} from "../../category/action/action";

// GET School detail
export function* handleGetCatgory(action) {
  console.log(action, "action called from manage");
  try {
    const res = yield call(getCategory, action);
    const status = res.status;
    const data = res.data.data;
    console.log(res);
    if (status === 200) {
      yield put({ type: GET_CATEGORY_SUCCESS, data });
    } else {
      yield put({ type: GET_CATEGORY_ERROR, data });
    }
  } catch (e) {
    yield put({ type: GET_CATEGORY_ERROR, e });
  }
}
