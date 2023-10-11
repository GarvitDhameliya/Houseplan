import {
  GET_CATEGORY_ERROR,
  GET_CATEGORY_PROGRESS,
  GET_CATEGORY_SUCCESS,
} from "../action/action";

const initialState = {
  category: [],
  getCategoryProgress: false,
  getCategoryError: null,

  postCategoryProgress: false,
  postCategoryError: null,
  postCategoryDuplicate: null,

  deleteCategoryProgress: false,
  deleteCategoryError: null,

  updateCategoryProgress: false,
  updateCategoryError: null,
  updateCategoryDuplicate: null,

  categoryIsLoaded: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_PROGRESS:
      return {
        ...state,
        getCategoryProgress: true,
        getCategoryError: null,
        categoryIsLoaded: false,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        getCategoryProgress: false,
        getCategoryError: null,
        categoryIsLoaded: true,
        category: action.data,
      };
    case GET_CATEGORY_ERROR:
      return {
        ...state,
        getCategoryProgress: false,
        getCategoryError: action.data,
        categoryIsLoaded: false,
      };
    default:
      return state;
  }
};

export default categoryReducer;
