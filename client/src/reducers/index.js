import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import favorReducer from "./favorReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  favors: favorReducer
});
