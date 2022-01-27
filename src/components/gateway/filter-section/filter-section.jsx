import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { CountFilter, SortBy } from "../..";
import { createHeadingFontTheme } from "../../../theme/theme";

const themeFont = createHeadingFontTheme;

const FilterSection = ({ filtered }) => {
  return (
    <ThemeProvider theme={themeFont}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py={1}
      >
        <Box>
          <Typography sx={{ display: { xs: "none", sm: "inline" } }}>
            Showing {filtered.length}
          </Typography>
        </Box>
        <Box>
          <Grid container>
            <SortBy />

            <CountFilter />
          </Grid>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default React.memo(FilterSection);
