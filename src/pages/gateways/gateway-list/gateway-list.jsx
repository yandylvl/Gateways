import { Button, Container, Grid } from "@mui/material";
import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import {
  FilterSection,
  GatewayCard,
  GatewayHeader,
  Pagination,
  PeripheralsItems,
  ProgressBar,
} from "../../../components";
import {
  getGatewaysByPeripheralsCount,
  loadGateways,
} from "../../../store/modules/entities/gateways";
import paginate from "./../../../utils/paginate";

const GatewayList = () => {
  const dispatch = useDispatch();

  const { pageSize, currentPage, filterCount, sortBy, order } = useSelector(
    (state) => state.ui.gateways
  );

  const { loading } = useSelector((state) => state.entities.gateways);

  const filtered = useSelector((state) =>
    getGatewaysByPeripheralsCount(filterCount)(state)
  );
  const sorted = sortBy === "" ? filtered : _.orderBy(filtered, sortBy, order);
  const paginated = paginate(sorted, currentPage, pageSize);

  useEffect(() => {
    dispatch(loadGateways());
  }, [dispatch]);

  const renderGatewaysList = () => {
    return paginated.map((gateway) => (
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
    <Container maxWidth="xl" sx={{ pb: 7 }}>
      <GatewayHeader />

      {loading ? (
        <ProgressBar />
      ) : (
        <React.Fragment>
          <FilterSection filtered={filtered} />

          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            direction={{ xs: "column", md: "row" }}
          >
            {renderGatewaysList()}
          </Grid>

          {paginated.length > 0 && (
            <Pagination
              currentPage={currentPage}
              pageSize={pageSize}
              totalCount={filtered.length}
            ></Pagination>
          )}
        </React.Fragment>
      )}
    </Container>
  );
};

export default GatewayList;
