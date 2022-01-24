import { Link, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Brand = () => {
  const style = {
    display: "flex",
    flexGrow: 1,
    textDecoration: "none",
    justifyContent: { xs: "center", md: "left" },
  };

  return (
    <Link component={RouterLink} to="/" sx={style}>
      <Typography variant="h6" noWrap component="div" sx={{}}>
        GateWays
      </Typography>
    </Link>
  );
};

export default Brand;
