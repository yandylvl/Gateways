import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "./middlewares/api";

import reducer from "./reducer";

const configStore = () =>
  configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  });

export default configStore;
