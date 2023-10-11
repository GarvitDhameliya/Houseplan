import {
  GET_SUB_CATEGORY_ERROR,
  GET_SUB_CATEGORY_PROGRESS,
  GET_SUB_CATEGORY_SUCCESS,
} from "../action/action";
const initialState = {
  subCategory: [],
  getSubCategoryProgress: false,
  getSubCategoryError: null,

  postSubCategoryProgress: false,
  postSubCategoryError: null,
  postSubCategoryDuplicate: null,

  deleteSubCategoryProgress: false,
  deleteSubCategoryError: null,

  updateSubCategoryProgress: false,
  updateSubCategoryError: null,
  updateSubCategoryDuplicate: null,

  subCategoryIsLoaded: false,
};

const subCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUB_CATEGORY_PROGRESS:
      return {
        ...state,
        getSubCategoryProgress: true,
        getSubCategoryError: null,
        subCategoryIsLoaded: false,
      };
    case GET_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        getSubCategoryProgress: false,
        getSubCategoryError: null,
        subCategoryIsLoaded: true,
        subCategory: action.data,
      };
    case GET_SUB_CATEGORY_ERROR:
      return {
        ...state,
        getSubCategoryProgress: false,
        getSubCategoryError: action.data,
        subCategoryIsLoaded: false,
      };
    default:
      return state;
  }
};

export default subCategoryReducer;
