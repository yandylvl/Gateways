import { createTheme } from "@mui/material/styles";

import pallete from "./variables.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: pallete.primary,
      dark: pallete.primaryDark,
    },
    secondary: {
      main: pallete.secondary,
      dark: pallete.secondaryDark,
    },
    background: {
      dark: pallete.bgDarkColor,
    },
  },
  typography: {
    fontFamily: ["Raleway", "Arial", "Helvetica Neue", "sans-serif"].join(","),
  },
});

export const createHeadingFontTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: ["Montserrat", "Arial", "Helvetica Neue", "sans-serif"].join(
      ","
    ),
  },
});

export default theme;
