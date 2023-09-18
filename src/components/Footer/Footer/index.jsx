import useClamp from "@/hooks/useClamp";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  const clamp = useClamp();

  return (
    <Box
      sx={{
        padding: clamp("25px", "50px", "75px"),
        backgroundColor: (theme) => theme.palette.primary.dark,
        color: "white",
      }}
    >
      <center>
        <Typography variant="button">
          @{new Date().getFullYear()} - Fusion Fitness
        </Typography>
      </center>
    </Box>
  );
};

export default Footer;
