import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    primary: {
      dark: "#181a2a",
      main: "#2b2e4a",
      light: "#3e426a",
    },
    common: {
      black: "#181a2a",
      white: "#e6e6e6",
    },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
});
