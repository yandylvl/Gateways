import { ArrowBackIos } from "@mui/icons-material";
import { Box, Button, Container, Divider, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";

import {
  GatewayCard,
  PeripheralCard,
  ProgressBar,
  RequireAuth,
} from "../../../components";
import {
  deleteGateway,
  getGateway,
} from "../../../store/modules/entities/gateways";

const GatewayDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: gatewayId } = useParams();

  // const gateway = useSelector((state) => state.entities.gateways.selected);
  const {
    selected: gateway,
    loading,
    errors,
  } = useSelector((state) => state.entities.gateways);

  useEffect(() => {
    dispatch(getGateway(gatewayId));
  }, [dispatch, gatewayId]);

  const handleDelete = () => {
    dispatch(deleteGateway("gatewayId"));
    navigate("/gateways");
  };

  const renderPeripherals = () => {
    return gateway?.peripherals.map((p) => (
      <Grid item xs={30} sm={15} md={10} lg={6} key={p.UID}>
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
          startIcon={<ArrowBackIos />}
        >
          Back to Gateways
        </Button>
      </Box>
      {loading ? (
        <ProgressBar />
      ) : (
        !errors.length && (
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

              <Grid container spacing={2} justifyContent="center" pt={2}>
                <Grid item xs={12} sm={6} md={2}>
                  <Button
                    variant="contained"
                    component={RouterLink}
                    to={`/gateways/edit/${gateway?.id}`}
                    color="secondary"
                    sx={{
                      textTransform: "none",
                      width: "100%",
                    }}
                  >
                    Edit
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      textTransform: "none",
                      width: "100%",
                    }}
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </GatewayCard>
        )
      )}
    </Container>
  );
};

export default RequireAuth(React.memo(GatewayDetails));
