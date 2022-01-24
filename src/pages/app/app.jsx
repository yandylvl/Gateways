import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import createTheme from "../../theme/theme";
import {
  GatewayCreate,
  GatewayDelete,
  GatewayDetails,
  GatewayList,
} from "../gateways";
import Landing from "../landing/landing";
import Login from "../login/login";
import NotFound from "../not-found/not-found";
import Signup from "../signup/signup";

const theme = createTheme;

const App = () => {
  const renderRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/gateways" exact element={<GatewayList />} />
        <Route path="/gateways/new" exact element={<GatewayCreate />} />
        <Route
          path="/gateways/details/:id"
          exact
          element={<GatewayDetails />}
        />
        <Route path="/gateways/delete/:id" exact element={<GatewayDelete />} />
        <Route path="/not-found" exact element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        {/* Your component tree. Now you can override MUI's styles. */}
        Routed App
        <BrowserRouter>{renderRoutes()}</BrowserRouter>
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export default App;
