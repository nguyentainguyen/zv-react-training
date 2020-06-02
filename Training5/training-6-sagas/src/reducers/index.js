import { combineReducers } from "redux";
import reducer from "./TodosReducer";

const rootReducer = combineReducers({
  todo: reducer
});

export default rootReducer;
