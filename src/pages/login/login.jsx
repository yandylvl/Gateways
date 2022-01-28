import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material/";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  Link as RouterLink,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import * as yup from "yup";
import YupPassword from "yup-password";

import { GoogleButton, MiniLogo } from "../../components/";
import { tryManualLogin } from "../../store/modules/auth/auth";

YupPassword(yup); // extend yup

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().password().required(),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    try {
      dispatch(tryManualLogin(data));
    } catch (e) {
      //TODO: use logger (sentry.io)
      console.log(e);
    }
  };

  const renderLogin = () => {
    // TODO: Refactor with SignUp

    return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            pt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link component={RouterLink} to="/">
            <MiniLogo color="#fff" />
          </Link>

          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register("email")}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password")}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              Log In
            </Button>
            <GoogleButton
              navigate={() => {
                const navTo = location.state
                  ? location.state.from
                  : "/gateways";

                navigate(navTo, { replace: true });
              }}
            >
              log in with google
            </GoogleButton>
            <Grid container>
              <Grid item xs>
                <Link component={RouterLink} to="/signup" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  };

  return (
    <React.Fragment>
      {isSignedIn ? <Navigate to="/gateways" /> : renderLogin()}
    </React.Fragment>
  );
};

export default React.memo(Login);
