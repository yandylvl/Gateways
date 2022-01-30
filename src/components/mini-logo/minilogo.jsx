import { Box } from "@mui/material";
import React from "react";

const MiniLogo = ({ color }) => {
  return (
    <Box
      sx={{
        color: { color },
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
        overflow: "hidden",
      }}
    >
      W
    </Box>
  );
};

export default MiniLogo;
