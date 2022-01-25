import { DevicesOther, Usb, UsbOff } from "@mui/icons-material";
import { Avatar, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import React from "react";

const PeripheralsItems = () => {
  const theme = useTheme();

  return (
    <div>
      <Grid container spacing={0.5}>
        <Grid item xs="auto">
          <Avatar sx={{ width: 20, height: 20 }}>
            <Usb sx={{ fontSize: 16, color: theme.palette.primary.main }} />
          </Avatar>
        </Grid>
        <Grid item xs="auto">
          <Avatar sx={{ width: 20, height: 20 }}>
            <UsbOff sx={{ fontSize: 16, color: theme.palette.error.main }} />
          </Avatar>
        </Grid>
        <Grid item xs="auto">
          <Avatar sx={{ width: 20, height: 20 }}>
            <Usb sx={{ fontSize: 16, color: theme.palette.primary.main }} />
          </Avatar>
        </Grid>
        <Grid item xs="auto">
          <Avatar sx={{ width: 20, height: 20 }}>
            <Usb sx={{ fontSize: 16, color: theme.palette.primary.main }} />
          </Avatar>
        </Grid>
        <Grid item xs="auto">
          <Avatar sx={{ width: 20, height: 20 }}>
            <UsbOff sx={{ fontSize: 16, color: theme.palette.error.main }} />
          </Avatar>
        </Grid>
        <Grid item xs="auto">
          <Avatar sx={{ width: 20, height: 20 }}>
            <Usb sx={{ fontSize: 16, color: theme.palette.primary.main }} />
          </Avatar>
        </Grid>
        <Grid item xs="auto">
          <Avatar sx={{ width: 20, height: 20 }}>
            <Usb sx={{ fontSize: 16, color: theme.palette.primary.main }} />
          </Avatar>
        </Grid>
        <Grid item xs="auto">
          <Avatar sx={{ width: 20, height: 20 }}>
            <UsbOff sx={{ fontSize: 16, color: theme.palette.error.main }} />
          </Avatar>
        </Grid>
        <Grid item xs="auto">
          <Avatar sx={{ width: 20, height: 20 }}>
            <Usb sx={{ fontSize: 16, color: theme.palette.primary.main }} />
          </Avatar>
        </Grid>
        <Grid item xs="auto">
          <Avatar sx={{ width: 20, height: 20 }}>
            <Usb sx={{ fontSize: 16, color: theme.palette.primary.main }} />
          </Avatar>
        </Grid>
      </Grid>
    </div>
  );
};

export default PeripheralsItems;
