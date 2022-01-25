import { Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { tryLoginWithGoogle } from "../../store/modules/auth/auth";

const GoogleButton = ({ navigate, children }) => {
  const dispatch = useDispatch();

  const handleLoginWithGoogleClick = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(tryLoginWithGoogle(navigate));
    },
    [dispatch, navigate]
  );

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="error"
      onClick={handleLoginWithGoogleClick}
      sx={{ mb: 2 }}
    >
      <Google sx={{ mx: 1 }} />
      {children}
    </Button>
  );
};

export default GoogleButton;
