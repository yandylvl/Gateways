import { Usb, UsbOff } from "@mui/icons-material";
import { Avatar, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

const PeripheralsItems = ({ peripherals }) => {
  const theme = useTheme();

  const renderPeripherals = () => {
    return peripherals.map((peripheral) => (
      <Grid item xs="auto" key={peripheral.id}>
        <Avatar sx={{ width: 20, height: 20 }}>
          {peripheral.status ? (
            <Usb sx={{ fontSize: 16, color: theme.palette.primary.main }} />
          ) : (
            <UsbOff sx={{ fontSize: 16, color: theme.palette.error.main }} />
          )}
        </Avatar>
      </Grid>
    ));
  };

  return (
    <div>
      <Grid container spacing={0.5}>
        {renderPeripherals()}
      </Grid>
    </div>
  );
};

export default PeripheralsItems;
