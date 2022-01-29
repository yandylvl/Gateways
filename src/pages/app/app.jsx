import "../../theme/global.scss";
import "react-toastify/dist/ReactToastify.css";

import {
  Box,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Footer, Header, Toast } from "../../components";
import { initGoogleAuth } from "../../store/modules/auth/auth";
import createTheme from "../../theme/theme";
import {
  GatewayCreate,
  GatewayDetails,
  GatewayEdit,
  GatewayList,
} from "../gateways";
import Landing from "../landing/landing";
import Login from "../login/login";
import NotFound from "../not-found/not-found";
import Signup from "../signup/signup";

const theme = createTheme;

const styles = {
  minHeight: {
    xs: "calc(100vh - 156px)",
    sm: "calc(100vh - 164px)",
  },
};

const App = () => {
  const dispatch = useDispatch();

  //Initialize Google oAuth to allow proper update of isSignedIn if it is not manual register
  useEffect(() => {
    dispatch(initGoogleAuth());
  }, [dispatch]);

  const renderRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/gateways" exact element={<GatewayList />} />
        <Route path="/gateways/create" exact element={<GatewayCreate />} />
        <Route
          path="/gateways/details/:id"
          exact
          element={<GatewayDetails />}
        />
        <Route path="/gateways/edit/:id" exact element={<GatewayEdit />} />
        <Route path="/not-found" exact element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <Toast />

        {/* Your component tree. Now you can override MUI's styles. */}

        <BrowserRouter>
          <Header />
          <Box component="main" sx={styles}>
            {renderRoutes()}
          </Box>
          <Footer />
        </BrowserRouter>
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export default React.memo(App);
