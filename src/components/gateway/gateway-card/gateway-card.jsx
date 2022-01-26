import "./gateway-card.scss";

import {
  Card,
  CardActions,
  CardContent,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";

import { createHeadingFontTheme } from "../../../theme/theme";
import { GatewayMeta } from "../../gateway";

const GatewayCard = ({ serialNumber, name, address, children }) => {
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
        <CardActions className="gateway-card-action">{children}</CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default GatewayCard;
