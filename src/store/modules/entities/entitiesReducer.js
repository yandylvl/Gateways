import { combineReducers } from "@reduxjs/toolkit";
import gatewaysReducer from "./gateways";

export default combineReducers({
  gateways: gatewaysReducer,
});
