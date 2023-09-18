import useClamp from "@/hooks/useClamp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AspectRatioRoundedIcon from "@mui/icons-material/AspectRatioRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import HolidayVillageRoundedIcon from "@mui/icons-material/HolidayVillageRounded";
import BadgeIcon from "@mui/icons-material/Badge";

const OVERVIEW_CARDS = [
  {
    IconComponent: AspectRatioRoundedIcon,
    title: "Land Area",
    caption: "4-6 Acres",
  },
  {
    IconComponent: EventRoundedIcon,
    title: "Flexible Timings",
    caption: "Open 16 hours a day",
  },
  {
    IconComponent: HolidayVillageRoundedIcon,
    title: "Branches",
    caption: "12",
  },
  {
    IconComponent: BadgeIcon,
    title: "Backed by",
    caption: "Professional Trainers",
  },
];

const OVERVIEW = [
  {
    title: "Unleash Your Potential: Transform Your Body, Elevate Your Mind",
    text: "Elevate your fitness journey with our diverse range of services, including gym workouts, Zumba, yoga, and more. We're here to help you reach your full potential.",
    span: 4,
  },
  {
    title: "Sweat in Style: State-of-the-Art Facilities",
    text: "Experience fitness like never before in our modern, well-equipped facilities designed for your comfort and performance. Get ready to sweat in style!",
    span: 4,
  },
  {
    title: "Your Wellness Oasis: Expert Trainers and Instructors",
    text: "Join our community of certified trainers and passionate instructors who are dedicated to guiding you towards a healthier, happier you. Your wellness oasis awaits.",
    span: 4,
  },
  {
    title: "More Than Fitness: A Lifestyle Transformation",
    text: "At our fitness center, it's not just about the workouts; it's about transforming your entire lifestyle. We offer a holistic approach to health and wellness that will leave you feeling refreshed and renewed.",
    span: 6,
  },
  {
    title: "Variety for All: Choose Your Fitness Adventure",
    text: "With a wide array of fitness classes and programs, we cater to everyone's preferences. Whether you're into high-intensity training, graceful yoga flows, or energetic Zumba beats, we've got you covered.",
    span: 6,
  },
];

const Item = (props) => {
  const clamp = useClamp();

  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "#eff1f3",
        borderRadius: clamp("20px", "30px", "40px"),
        padding: {
          xs: "20px",
          sm: "25px",
          md: "30px",
          lg: "35px",
          xl: "40px",
        },
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        transition: "all 0.3s ease",
        color: "white",
        ":hover": {
          border: "1px solid rgba(255, 255, 255, 0.5)",
          transform: "scale(1.01)",
        },
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        ...sx,
      }}
      {...other}
    />
  );
};

const Overview = () => {
  const clamp = useClamp();

  return (
    <>
      <Box
        id="overview"
        sx={{
          padding: clamp("25px", "50px", "75px"),
          background: "rgb(0,0,0)",
          background:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(43,46,74,1) 50%, rgba(62,66,106,1) 100%)",
        }}
      >
        <Grid container spacing={3} sx={{ marginBottom: "50px" }}>
          {OVERVIEW_CARDS.map(({ IconComponent, title, caption }, index) => {
            return (
              <Grid item xs={6} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    padding: clamp("10px", "15px", "20px"),
                    backgroundColor: "transparent",
                  }}
                >
                  <IconComponent
                    sx={{
                      fontSize: clamp("30px", "50px", "70px"),
                      color: "white",
                    }}
                  />
                  <br />
                  <Typography
                    sx={{ color: "white", letterSpacing: "3px" }}
                    variant={clamp("body2", "body1")}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{ color: "white" }}
                    variant={clamp("h6", "h5")}
                  >
                    {caption}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <center>
          <Typography color="white" variant="h4">
            What is Fusion Fitness?
          </Typography>
          <br />
          <br />
        </center>
        <Grid container spacing={3}>
          {OVERVIEW.map(({ title, text, span }, index) => (
            <Grid item xs={12} md={span} key={index}>
              <Item>
                <Typography variant="h5" sx={{ marginBottom: "20px" }}>
                  {title}
                </Typography>
                <Typography>{text}</Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Overview;
