import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";
import { getUserReducer } from "./GetUserReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  user: getUserReducer
});

export default rootReducer;
