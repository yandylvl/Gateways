import { Grid } from "@mui/material";
import React from "react";
import "./not-found.scss";

const NotFound = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="gbContainer"
      sx={{ height: { xs: "calc(100vh - 156px)", sm: "calc(100vh - 164px)" } }}
    >
      <Grid item xs className="bg-404"></Grid>
    </Grid>
  );
};

export default NotFound;
