import { useTheme } from "@emotion/react";
import { Delete, ExpandMore, Usb, UsbOff } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  IconButton,
  Switch,
  TextField,
} from "@mui/material";
import React from "react";

const PeripheralsList = ({
  peripherals,
  register,
  errors,
  onDeletePeripheral,
  onChangeName,
  onChangeStatus,
  defaultExpanded = false,
}) => {
  const theme = useTheme();

  return peripherals?.map((peripheral, index) => (
    <Accordion key={index} defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box sx={{ display: "inline-flex", alignItems: "center" }}>
          {peripheral.status ? (
            <Usb
              sx={{
                fontSize: 16,
                color: theme.palette.primary.main,
                mr: 1,
                width: "28px",
                pl: "8px",
              }}
            />
          ) : (
            <UsbOff
              sx={{
                fontSize: 16,
                color: theme.palette.error.main,
                mx: 1,
                width: "20px",
              }}
            />
          )}
          {peripheral.vendor}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={1} alignItems="center" justifyContent="right">
          <Grid item xs={10}>
            {console.log(`rendering`)}
            <TextField
              required
              fullWidth
              autoFocus
              id={`vendor${index}`}
              label="Vendor"
              value={peripheral.vendor}
              onChange={(ev) => onChangeName(ev, index)}
              name={`vendor${index}`}
            />
          </Grid>
          <Grid item xs={2}>
            <Switch
              checked={peripheral.status}
              onClick={(ev) => onChangeStatus(ev, index)}
            />
          </Grid>
          <Box sx={{ mt: 2 }}>
            <IconButton
              aria-label="delete"
              color="error"
              onClick={(ev) => onDeletePeripheral(ev, index)}
            >
              <Delete />
            </IconButton>
          </Box>
        </Grid>
      </AccordionDetails>
    </Accordion>
  ));
};

export default PeripheralsList;
