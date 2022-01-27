import "./landing-steps.scss";

import {
  AddShoppingCart,
  FaceRetouchingNatural,
  Fingerprint,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

import LandingSection from "./../landing-section";
import StepArrow from "./step-arrow";
import StepCard from "./step-card";

const LandingSteps = () => {
  const theme = useTheme();
  return (
    <LandingSection className="section-step">
      <Grid
        container
        justifyContent="space-between"
        direction={{ xs: "column", md: "row" }}
      >
        <StepCard
          icon={<FaceRetouchingNatural color="primary" className="step-icon" />}
          header={"Create Account"}
          body={
            "Lorem ipsum dolor sit amet, consetetur With sadipscing elitr diamnonumy eirmod tempor invidunt ut labore edolore."
          }
        >
          <div className="canvas-arrow-wrap">
            <StepArrow color={theme.palette.primary.main} />
          </div>
        </StepCard>

        <StepCard
          icon={<Fingerprint color="error" className="step-icon" />}
          header={"Verify Account"}
          body={
            "Lorem ipsum dolor sit amet, consetetur With sadipscing elitr diamnonumy eirmod tempor invidunt ut labore edolore."
          }
        >
          <div className="canvas-arrow-wrap inverted">
            <StepArrow color={theme.palette.secondary.main} />
          </div>
        </StepCard>

        <StepCard
          icon={<AddShoppingCart color="secondary" className="step-icon" />}
          header={"Buy & Sell"}
          body={
            "Lorem ipsum dolor sit amet, consetetur With sadipscing elitr diamnonumy eirmod tempor invidunt ut labore edolore."
          }
        />
      </Grid>
    </LandingSection>
  );
};

export default React.memo(LandingSteps);
