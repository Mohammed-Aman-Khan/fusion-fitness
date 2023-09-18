import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useClamp from "@/hooks/useClamp";

const ScrollToTop = () => {
  const clamp = useClamp();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Box sx={{ position: "fixed", bottom: 15, right: 15, zIndex: 21474836 }}>
      <Fade in={trigger}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Fade>
    </Box>
  );
};

export default ScrollToTop;
