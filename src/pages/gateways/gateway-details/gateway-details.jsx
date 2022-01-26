import { Container, Button, Box, Divider, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GatewayCard, PeripheralCard, RequireAuth } from "../../../components";
import { getGateway } from "../../../store/modules/entities/gateways";
import { Link as RouterLink } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";

const GatewayDetails = () => {
  const dispatch = useDispatch();
  const { id: gatewayId } = useParams();

  const gateway = useSelector((state) => state.entities.gateways.selected);

  useEffect(() => {
    dispatch(getGateway(gatewayId));
  }, [dispatch, gatewayId]);

  const renderPeripherals = () => {
    return gateway.peripherals.map((p) => (
      <Grid item xs={30} sm={15} md={10} lg={6}>
        <PeripheralCard {...p} />
      </Grid>
    ));
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 3 }}>
        <Button
          component={RouterLink}
          to={`/gateways`}
          sx={{ textTransform: "none" }}
        >
          <ArrowBackIos />
          Back to Gateways
        </Button>
      </Box>
      <GatewayCard {...gateway}>
        <Box sx={{ width: "100%" }}>
          <Divider sx={{ py: 4 }}>Peripherals</Divider>

          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            columns={30}
          >
            {renderPeripherals()}
          </Grid>

          <Divider sx={{ py: 3 }} />

          <Grid container spacing={2} justifyContent="right" pt={2}>
            <Grid item>
              <Button
                variant="contained"
                component={RouterLink}
                to={`/gateways/edit/${gateway.id}`}
                color="secondary"
                sx={{ textTransform: "none" }}
              >
                Edit
              </Button>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                color="error"
                sx={{ textTransform: "none" }}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Box>
      </GatewayCard>
    </Container>
  );
};

export default RequireAuth(React.memo(GatewayDetails));
