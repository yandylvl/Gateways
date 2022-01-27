import { useTheme } from "@emotion/react";
import { Usb, UsbOff } from "@mui/icons-material";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import dateFormat from "dateformat";
import React from "react";

const PeripheralCard = ({ status, vendor, date }) => {
  const theme = useTheme();

  return (
    <Card sx={{ minWidth: 170 }}>
      <CardContent>
        <Grid container direction="column" alignItems="center">
          {status ? (
            <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
              <Usb fontSize="large" />
            </Avatar>
          ) : (
            <Avatar sx={{ bgcolor: theme.palette.error.main }}>
              <UsbOff fontSize="large" />
            </Avatar>
          )}
          <Typography variant="h6" component="span" sx={{ mt: 1, mb: 2 }}>
            {vendor}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {dateFormat(date, "mmm dS, yyyy, HH:MM:ss")}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PeripheralCard;
