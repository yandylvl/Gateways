import { combineReducers } from "redux";

import uiReducer from "./modules/ui/uiReducer";
import authReducer from "./modules/auth/auth";

export default combineReducers({
  ui: uiReducer,
  auth: authReducer,
});
