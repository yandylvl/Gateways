import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

function Copyright(props) {
  return (
    <Typography variant="body2" color="primary.main" align="center" {...props}>
      {"Copyright © "}
      <Link component={RouterLink} color="inherit" to="/">
        GateWays
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        px: 2,
        mt: "auto",
        height: "100px",
        backgroundColor: (theme) => theme.palette.background.dark,
      }}
    >
      <Copyright />
    </Box>
  );
};

export default Footer;
