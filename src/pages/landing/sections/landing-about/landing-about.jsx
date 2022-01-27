import "./landing-about.scss";

import { Button, Grid, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { createHeadingFontTheme } from "../../../../theme/theme";
import LandingSection from "../landing-section";

const LandingAbout = () => {
  const headingFont = createHeadingFontTheme;

  return (
    <div>
      <LandingSection className="section-about">
        <Grid container justifyContent="flex-end">
          <Grid item xs sm={8} md={5} className="about-container">
            <Typography className="small-text highlight">
              WHAT IS GateWays?
            </Typography>
            <ThemeProvider theme={headingFont}>
              <Typography variant="h2" className="section-header">
                The network for Cuba
              </Typography>
            </ThemeProvider>
            <Typography>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore edolore magna aliquyam
              erat, sed diam voluptua. At vero eos accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, takimata sanctus est ipsum
              dolor.
            </Typography>

            <Button
              component={RouterLink}
              aria-label="join now"
              variant="contained"
              color="secondary"
              size="large"
              to="/login"
              sx={{
                mt: 3.75,
              }}
            >
              join now
            </Button>
          </Grid>
        </Grid>
      </LandingSection>
    </div>
  );
};

export default LandingAbout;
