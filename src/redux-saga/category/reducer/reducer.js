import {
  GET_CATEGORY_ERROR,
  GET_CATEGORY_PROGRESS,
  GET_CATEGORY_SUCCESS,
  POST_CATEGORY_DUPLICATE,
  POST_CATEGORY_ERROR,
  POST_CATEGORY_PROGRESS,
  POST_CATEGORY_SUCCESS,
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
       // POST CATEGORY REDUCER

    case POST_CATEGORY_PROGRESS:
      return {
        ...state,
        postCategoryProgress: true,
        postCategoryError: null,
        categoryIsLoaded: false,
      };
    case POST_CATEGORY_SUCCESS:
      return {
        ...state,
        postCategoryProgress: false,
        postCategoryError: null,
        categoryIsLoaded: true,
        category: state.category.concat(action.data),
      };
    case POST_CATEGORY_DUPLICATE:
      return {
        ...state,
        postCategoryProgress: false,
        postCategoryError: action.data,
        categoryIsLoaded: false,
      };
    case POST_CATEGORY_ERROR:
      return {
        ...state,
        postCategoryProgress: false,
        postCategoryError: action.data,
        categoryIsLoaded: false,
      };

    default:
      return state;
  }
};

export default categoryReducer;
