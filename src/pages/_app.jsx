import "@/styles/globals.css";
import { useEffect } from "react";
import { initViewportSize } from "@/utils/responsive";
import { ThemeProvider } from "@mui/material";
import theme from "@/utils/theme";
import dynamic from "next/dynamic";
const StateWrapper = dynamic(
  () => import("@/components/Shared/Wrappers/StateWrapper"),
  { ssr: false }
);
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import { SnackbarProvider } from "notistack";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    initViewportSize();
    window.addEventListener("resize", initViewportSize);
    () => {
      window.removeEventListener("resize", initViewportSize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StateWrapper>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          {/* <SnackbarProvider> */}
          <Component {...pageProps} />
          {/* </SnackbarProvider> */}
        </LocalizationProvider>
      </StateWrapper>
    </ThemeProvider>
  );
};

export default MyApp;
