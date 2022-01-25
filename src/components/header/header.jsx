import "./header.scss";

import { AppBar, Container, Skeleton, Toolbar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import {
  Authorization,
  Brand,
  DrawerMenu,
  ProfileSettings,
} from "./components/";

const Header = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  return (
    <React.Fragment>
      <AppBar position="sticky" className="header">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <DrawerMenu isSignedIn={isSignedIn} />

            <Brand />

            {isSignedIn === undefined ? (
              <Skeleton
                sx={{ bgcolor: "#3c331b" }}
                variant="circular"
                width={24}
                height={24}
              />
            ) : isSignedIn ? (
              <ProfileSettings />
            ) : (
              <Authorization />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};
export default Header;
