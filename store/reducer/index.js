import reducer from "./reducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

export default combineReducers({
  store: reducer,
  cartReducer,
});
