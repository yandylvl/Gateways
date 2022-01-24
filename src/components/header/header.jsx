import "./header.scss";

import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";

import {
  Authorization,
  Brand,
  DrawerMenu,
  ProfileSettings,
} from "./components/";

const Header = () => {
  return (
    <React.Fragment>
      <AppBar position="sticky" className="header">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <DrawerMenu />

            <Brand />

            <ProfileSettings />

            <Authorization />
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};
export default Header;
