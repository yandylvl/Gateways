import { Button, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import React from "react";

const GatewayHeader = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      py={3}
    >
      <Typography variant="h4" component="h1">
        Gateways
      </Typography>

      <Button
        variant="contained"
        component={RouterLink}
        to="/gateways/create"
        sx={{ textTransform: "none" }}
      >
        <Typography>Create</Typography>
        <Typography
          component="span"
          sx={{ display: { xs: "none", sm: "inline" } }}
        >
          &nbsp;New Gateway
        </Typography>
      </Button>
    </Grid>
  );
};

export default React.memo(GatewayHeader);
