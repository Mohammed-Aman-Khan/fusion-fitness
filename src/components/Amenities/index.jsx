import useClamp from "@/hooks/useClamp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AMENITIES } from "./amenities";

const Amenities = () => {
  const clamp = useClamp();

  return (
    <Box id="amenities" sx={{ padding: clamp("25px", "50px", "75px") }}>
      <center>
        <Typography variant="h4">Amenities at Fusion Fitness</Typography>
      </center>
      <br />
      <br />
      <Grid container spacing={3}>
        {AMENITIES.map((amenity, amenityIndex) => (
          <Grid item xs={12} sm={6} md={4}>
            <Box
              key={amenityIndex}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: clamp("10px", "15px", "20px"),
                borderRadius: clamp("10px", "15px", "20px"),
                pointerEvents: "none",
                boxShadow: "0px 5px 30px -12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div>{amenity.icon}</div>
              <Typography
                variant="h6"
                sx={{ marginLeft: clamp("10px", "15px", "20px") }}
              >
                {amenity.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Amenities;
