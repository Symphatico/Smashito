import { combineReducers } from "redux";
import characterReducer from "./characterReducer";
import authReducer from "./authReducer";

export default combineReducers({
  characterInfo: characterReducer,
  auth: authReducer
});
