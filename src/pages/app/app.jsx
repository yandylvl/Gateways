import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import React from "react";

import createTheme from "../../theme/theme";

const theme = createTheme;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        {/* Your component tree. Now you can override MUI's styles. */}
        Styled App
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export default App;
