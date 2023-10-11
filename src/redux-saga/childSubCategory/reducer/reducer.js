import {
  GET_CHILD_SUB_CATEGORY_ERROR,
  GET_CHILD_SUB_CATEGORY_PROGRESS,
  GET_CHILD_SUB_CATEGORY_SUCCESS,
} from "../action/action";
const initialState = {
  childSubCategory: [],
  getChildSubCategoryProgress: false,
  getChildSubCategoryError: null,

  postChildSubCategoryProgress: false,
  postChildSubCategoryError: null,
  postChildSubCategoryDuplicate: null,

  deleteChildSubCategoryProgress: false,
  deleteChildSubCategoryError: null,

  updateChildSubCategoryProgress: false,
  updateChildSubCategoryError: null,
  updateChildSubCategoryDuplicate: null,

  childSubCategoryIsLoaded: false,
};

const childSubCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHILD_SUB_CATEGORY_PROGRESS:
      return {
        ...state,
        getChildSubCategoryProgress: true,
        getChildSubCategoryError: null,
        childSubCategoryIsLoaded: false,
      };
    case GET_CHILD_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        getChildSubCategoryProgress: false,
        getChildSubCategoryError: null,
        childSubCategoryIsLoaded: true,
        childSubCategory: action.data,
      };
    case GET_CHILD_SUB_CATEGORY_ERROR:
      return {
        ...state,
        getChildSubCategoryProgress: false,
        getChildSubCategoryError: action.data,
        childSubCategoryIsLoaded: false,
      };
    default:
      return state;
  }
};

export default childSubCategoryReducer;
