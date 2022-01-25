import "./gateway-meta.scss";

import { Router } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

const GatewayMeta = ({ name }) => {
  const theme = useTheme();

  return (
    <div className="gateway-meta">
      <Avatar
        sx={{ width: 56, height: 56, bgcolor: theme.palette.secondary.main }}
      >
        <Router
          fontSize="large"
          sx={{ color: theme.palette.background.dark }}
        />
      </Avatar>
      <span className="gateway-name">
        <Typography component={"span"}>{name}</Typography>
      </span>
    </div>
  );
};

export default GatewayMeta;
