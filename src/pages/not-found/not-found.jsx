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
      sx={{ height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" } }}
    >
      <Grid item xs className="bg-404"></Grid>
    </Grid>
  );
};

export default NotFound;
