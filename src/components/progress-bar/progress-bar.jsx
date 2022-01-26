import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function ProgressBar() {
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        top: { xs: "56px", sm: "64px" },
      }}
    >
      <LinearProgress />
    </Box>
  );
}
