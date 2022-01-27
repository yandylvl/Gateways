import { combineReducers } from "@reduxjs/toolkit";

import drawerReducer from "./drawer";
import gatewaysReducer from "./gateways";

export default combineReducers({
  drawer: drawerReducer,
  gateways: gatewaysReducer,
});
