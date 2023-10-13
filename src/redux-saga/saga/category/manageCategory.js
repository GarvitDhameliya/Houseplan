import { call, put } from "redux-saga/effects";
import { getCategory, postCategory } from "../../category/api/api";
import {
  GET_CATEGORY_ERROR,
  GET_CATEGORY_SUCCESS,
  POST_CATEGORY_ERROR,
  POST_CATEGORY_SUCCESS,
} from "../../category/action/action";

// GET School detail
export function* handleGetCatgory(action) {
  try {
    const res = yield call(getCategory, action);
    const status = res.status;
    const data = res.data.data;
    if (status === 200) {
      yield put({ type: GET_CATEGORY_SUCCESS, data });
    } else {
      yield put({ type: GET_CATEGORY_ERROR, data });
    }
  } catch (e) {
    yield put({ type: GET_CATEGORY_ERROR, e });
  }
}

// Post School detail
export function* handlePostCatgory(action) {
  try {
    const res = yield call(postCategory, action.payload);
    const status = res.status;
    const data = res.data.data;
    if (status === 200) {
      yield put({ type: POST_CATEGORY_SUCCESS, data });
    } else {
      yield put({ type: POST_CATEGORY_ERROR, data });
    }
  } catch (e) {
    yield put({ type: POST_CATEGORY_ERROR, e });
  }
}