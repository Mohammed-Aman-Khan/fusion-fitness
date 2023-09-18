import useClamp from "@/hooks/useClamp";
import Image from "../Shared/Image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Gallery = () => {
  const clamp = useClamp();

  return (
    <Box
      id="gallery"
      sx={{
        padding: clamp("25px", "50px", "75px"),
      }}
    >
      <center>
        <Typography variant="h4">Gallery</Typography>
        <br />
        <br />
      </center>
      <Grid container spacing={2}>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={i}>
            <Image
              src={`/gallery/${i}.jpg`}
              type="image/jpg"
              alt={`Image ${1}`}
              containerStyle={{
                borderRadius: "10px",
              }}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
