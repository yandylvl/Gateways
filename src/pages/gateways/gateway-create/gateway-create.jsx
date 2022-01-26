import { yupResolver } from "@hookform/resolvers/yup";
import { AddBox, ArrowBackIos } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as yup from "yup";

import { PeripheralsList, RequireAuth } from "../../../components";
import { addGateway } from "../../../store/modules/entities/gateways";
import { createHeadingFontTheme } from "../../../theme/theme";
import { ipv4 } from "../../../utils/yup-helpers";

yup.addMethod(yup.string, "ipv4", ipv4);

const schema = yup.object({
  serialNumber: yup.string().required(),
  name: yup.string().required(),
  address: yup.string().ipv4(),
});

const GatewayCreate = () => {
  const themeFont = createHeadingFontTheme;

  const [peripherals, setPeripherals] = useState([]);
  const [UID, setUID] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(
      addGateway({
        id: data.serialNumber.toUpperCase(),
        serialNumber: data.serialNumber,
        name: data.name,
        address: data.address,
        peripherals: peripherals,
      })
    );

    navigate("/gateways");
  };

  const handleAddPeripheral = () => {
    const now = new Date();

    if (peripherals.length < 10) {
      setPeripherals([
        ...peripherals,
        {
          UID,
          vendor: "",
          date: now,
          status: false,
        },
      ]);
      //TODO: if user has to provide this UID, add method to handle it
      setUID(UID + 1);
    }
  };

  const handleChangeName = (ev, index) => {
    let items = [...peripherals];
    let item = { ...items[index] };
    item.vendor = ev.target.value;
    items[index] = item;
    setPeripherals(items);
  };
  const handleChangeStatus = (ev, index) => {
    let items = [...peripherals];
    let item = { ...items[index] };
    item.status = !item.status;
    items[index] = item;
    setPeripherals(items);
  };

  const handleDeletePeripheral = (ev, indexOfP) => {
    setPeripherals(peripherals.filter((p, index) => index !== indexOfP));
  };

  const renderPeripherals = () => {
    return (
      <PeripheralsList
        peripherals={peripherals}
        register={register}
        errors={errors}
        onDeletePeripheral={handleDeletePeripheral}
        onChangeName={handleChangeName}
        onChangeStatus={handleChangeStatus}
      />
    );
  };

  return (
    <ThemeProvider theme={themeFont}>
      <Container component="main" maxWidth="xs" sx={{ pb: 5 }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create Gateway
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  autoFocus
                  id="serialNumber"
                  label="Serial Number"
                  name="serialNumber"
                  {...register("serialNumber")}
                  error={Boolean(errors.serialNumber)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  autoFocus
                  id="name"
                  label="Name"
                  name="name"
                  {...register("name")}
                  error={Boolean(errors.name)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  autoFocus
                  id="address"
                  label="IPv4 Address"
                  name="address"
                  {...register("address")}
                  error={Boolean(errors.address)}
                  helperText={errors.address?.message}
                />
              </Grid>

              <Grid item xs={12}>
                <Divider>Peripherals</Divider>
              </Grid>

              <Grid item xs={12}>
                {renderPeripherals()}
              </Grid>

              {peripherals.length < 10 && (
                <Grid item xs={12}>
                  <Divider>
                    <IconButton
                      aria-label="accept"
                      color="primary"
                      onClick={handleAddPeripheral}
                    >
                      <AddBox />
                    </IconButton>
                  </Divider>
                </Grid>
              )}

              <Grid item xs={12}>
                <Button
                  fullWidth
                  component={RouterLink}
                  to="/gateways"
                  variant="contained"
                  sx={{ mt: 3 }}
                  color="secondary"
                >
                  <ArrowBackIos fontSize="small" />
                  Back to Gateways
                </Button>
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1 }}>
              Create Gateway
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RequireAuth(React.memo(GatewayCreate));
