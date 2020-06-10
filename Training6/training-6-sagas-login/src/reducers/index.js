import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";
import { getUserReducer } from "./GetUserReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "user"]
};

const rootReducer = combineReducers({
  login: loginReducer,
  user: getUserReducer
});

export default persistReducer(persistConfig, rootReducer);
