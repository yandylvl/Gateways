import { Box } from "@mui/material";
import React from "react";

const style = {
  color: "#fff",
  fontSize: "58px",
  fontWeight: 700,
  width: 50,
  height: 50,
  mb: 1,
  bgcolor: "primary.main",
  borderRadius: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const MiniLogo = () => {
  return <Box sx={style}>W</Box>;
};

export default MiniLogo;
