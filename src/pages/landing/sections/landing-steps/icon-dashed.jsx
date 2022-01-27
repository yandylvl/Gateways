import { Box, Grid } from "@mui/material";
import React from "react";
import "./icon-dashed.scss";

const IconDashed = (props) => {
  return (
    <Box className="step-icon-container">
      <Grid className="step-icon-wrapper">{props.children}</Grid>
    </Box>
  );
};

export default IconDashed;
