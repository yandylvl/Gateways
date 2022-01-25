import "./gateway-card.scss";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { createHeadingFontTheme } from "../../../theme/theme";
import { GatewayMeta } from "../../gateway";
import PeripheralsItems from "./../peripherals-items/peripherals-items";

const GatewayCard = ({ serialNumber, name, address }) => {
  const themeFont = createHeadingFontTheme;

  return (
    <ThemeProvider theme={themeFont}>
      <Card className="dashboard-card">
        <CardContent className="dashboard-card-content">
          <GatewayMeta name={name}></GatewayMeta>

          <Typography component="span" className="serial-number">
            {serialNumber}
          </Typography>
          <Typography component="p" className="sub">
            IPv4
          </Typography>
          <Typography component="span" className="address">
            {address}
          </Typography>
        </CardContent>
        <CardActions className="gateway-card-action">
          <PeripheralsItems />

          <Button
            variant="contained"
            component={RouterLink}
            to={`/gateways/details/1`}
            color="secondary"
            sx={{ textTransform: "none" }}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default GatewayCard;
