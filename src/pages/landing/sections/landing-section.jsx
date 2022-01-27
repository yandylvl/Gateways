import { Box, Container } from "@mui/material";
import React from "react";

const LandingSection = ({ children, className }) => {
  return (
    <Box component="section" className={className}>
      <Container className="landing-section-container">{children}</Container>
    </Box>
  );
};

export default React.memo(LandingSection);
