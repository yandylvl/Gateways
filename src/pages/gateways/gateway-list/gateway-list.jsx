import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import {
  GatewayCard,
  PeripheralsItems,
  RequireAuth,
} from "../../../components";
import { loadGateways } from "../../../store/modules/entities/gateways";

const GatewayList = () => {
  const dispatch = useDispatch();

  const gateways = useSelector((state) => state.entities.gateways.list);

  useEffect(() => {
    dispatch(loadGateways());
  }, [dispatch]);

  const renderGatewaysList = () => {
    return gateways.map((gateway) => (
      <Grid item xs md={6} key={gateway.id}>
        <GatewayCard {...gateway}>
          <PeripheralsItems peripherals={gateway.peripherals} />

          <Button
            variant="contained"
            component={RouterLink}
            to={`/gateways/details/${gateway.id}`}
            color="secondary"
            sx={{ textTransform: "none" }}
          >
            Details
          </Button>
        </GatewayCard>
      </Grid>
    ));
  };

  return (
    <Container maxWidth="xl">
      {/*TODO: refactor to a component */}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py={2}
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
          Create New Gateway
        </Button>
      </Grid>

      <React.Fragment>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={1}
        >
          <Box>
            <Typography sx={{ display: { xs: "none", sm: "inline" } }}>
              Showing {gateways.length} gateways
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }}
        >
          {renderGatewaysList()}
        </Grid>
      </React.Fragment>
    </Container>
  );
};

export default RequireAuth(React.memo(GatewayList));
