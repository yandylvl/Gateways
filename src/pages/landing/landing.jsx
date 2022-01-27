import React from "react";

import LandingAbout from "./sections/landing-about/landing-about";

const Landing = () => {
  return (
    <React.Fragment>
      <LandingAbout />
    </React.Fragment>
  );
};

export default React.memo(Landing);
