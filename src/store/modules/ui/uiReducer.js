import { combineReducers } from "@reduxjs/toolkit";

import drawerReducer from "./drawer";

export default combineReducers({
  drawer: drawerReducer,
});
