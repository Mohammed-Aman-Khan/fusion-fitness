import { useCallback } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const useClamp = () => {
  const isPhone = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const isTablet = !isPhone && !isDesktop;

  const clamp = useCallback(
    (smallValue, mediumValue = smallValue, largeValue = mediumValue) => {
      if (isPhone) {
        return smallValue;
      }
      if (isTablet) {
        return mediumValue;
      }
      return largeValue;
    },
    [isPhone, isDesktop, isTablet]
  );

  return clamp;
};

export default useClamp;
