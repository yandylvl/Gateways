import { Box } from "@mui/material";
import React from "react";
import AuthMobile from "./auth-mobile";
import AuthButtons from "./auth-buttons";

const Authorization = () => {
  return (
    <React.Fragment>
      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
        <AuthButtons />
      </Box>

      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <AuthMobile />
      </Box>
    </React.Fragment>
  );
};

export default React.memo(Authorization);
