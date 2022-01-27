import React from "react";

import LandingAbout from "./sections/landing-about/landing-about";
import LandingSteps from "./sections/landing-steps/landing-steps";

const Landing = () => {
  return (
    <React.Fragment>
      <LandingAbout />
      <LandingSteps />
    </React.Fragment>
  );
};

export default React.memo(Landing);
