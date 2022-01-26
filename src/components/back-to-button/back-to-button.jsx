import { ArrowBackIos } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const BackToButton = ({ dir }) => {
  return (
    <Button
      component={RouterLink}
      to={`/${dir}`}
      sx={{ textTransform: "none" }}
      startIcon={<ArrowBackIos />}
    >
      Back to {dir}
    </Button>
  );
};

export default BackToButton;
