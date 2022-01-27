import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import React from "react";

import { createHeadingFontTheme } from "../../../../theme/theme";
import IconDashed from "./icon-dashed";

const StepCard = ({ icon, header, body, children }) => {
  const headingFont = createHeadingFontTheme;

  return (
    <Grid item xs md={4}>
      <Card className="step" elevation={0}>
        <CardContent>
          <IconDashed>{icon}</IconDashed>
          <ThemeProvider theme={headingFont}>
            <Typography
              gutterBottom
              variant="h5"
              component="h3"
              className="step-header"
            >
              {header}
            </Typography>
          </ThemeProvider>
          <Typography variant="body1">{body}</Typography>
        </CardContent>

        {children}
      </Card>
    </Grid>
  );
};

export default React.memo(StepCard);
