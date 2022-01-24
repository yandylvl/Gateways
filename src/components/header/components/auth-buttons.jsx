import { Button } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const AuthButtons = () => {
  return (
    <React.Fragment>
      <Button
        component={RouterLink}
        variant="outlined"
        sx={{ textTransform: "none" }}
        to="/login"
      >
        Log In
      </Button>
      <Button
        component={RouterLink}
        variant="outlined"
        sx={{ ml: 1, textTransform: "none" }}
        to="/signup"
      >
        Sign Up
      </Button>
    </React.Fragment>
  );
};

export default React.memo(AuthButtons);
