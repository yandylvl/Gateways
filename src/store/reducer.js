import { combineReducers } from "redux";

import uiReducer from "./modules/ui/uiReducer";
import authReducer from "./modules/auth/auth";
import entitiesReducer from "./modules/entities/entitiesReducer";

export default combineReducers({
  ui: uiReducer,
  auth: authReducer,
  entities: entitiesReducer,
});
