import { combineReducers } from "redux";
import categoryReducer from "./category/reducer/reducer";
import subCategoryReducer from "./subCategory/reducer/reducer";
import childSubCategoryReducer from "./childSubCategory/reducer/reducer";

const rootReducers = combineReducers({
  categoryReducer,
  subCategoryReducer,
  childSubCategoryReducer
});

export default rootReducers;
