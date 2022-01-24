import { Avatar, Box } from "@mui/material";
import React from "react";

import miniLogo from "./minilogo.svg";

const MiniLogo = () => {
  return (
    <Box
      sx={{
        width: 50,
        height: 50,
        mb: 1,
        bgcolor: "primary.main",
        borderRadius: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow:
          "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
      }}
    >
      <Avatar alt="coinfianza" variant="square" src={miniLogo} />
    </Box>
  );
};

export default MiniLogo;
