import { combineReducers } from "redux";
import categoryReducer from "./category/reducer/reducer";

const rootReducers = combineReducers({
  categoryReducer,
});

export default rootReducers;
