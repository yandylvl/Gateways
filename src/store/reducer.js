import { combineReducers } from "redux";

import uiReducer from "./modules/ui/uiReducer";

export default combineReducers({
  ui: uiReducer,
});
