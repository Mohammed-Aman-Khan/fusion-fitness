import Box from "@mui/material/Box";
import useClamp from "@/hooks/useClamp";
import { vh } from "@/utils/responsive";
import Navbar from "./Navbar";
import Image from "../Shared/Image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const LandingScreen = () => {
  const clamp = useClamp();
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Box
      sx={{
        height: vh(),
        padding: clamp("25px", "25px 50px", "25px 75px"),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Grid
        container
        spacing={3}
        sx={{
          height: `calc(100% - ${clamp("50px", "60px", "70px")})`,
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            height: clamp("50%", "100%"),
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant={clamp("h3", "h2", "h1")}>
                <strong>Fusion Fitness</strong>
              </Typography>
              <Typography variant={clamp("body1", "h6", "h5")}>
                Bangalore
              </Typography>
              <br />
              {clamp(<></>, <br />)}
              <Typography variant={clamp("h6", "h5", "h4")}>
                YOUR FITNESS JOURNEY STARTS HERE
              </Typography>
              <br />
              {clamp(<></>, <br />)}
              <Typography variant={clamp("body1", "h6", "h5")}>
                Are you ready to{" "}
                <TypeAnimation
                  sequence={[
                    "challenge yourself?",
                    1500,
                    "get fit?",
                    1500,
                    "be a better you?",
                    1500,
                  ]}
                  repeat={Infinity}
                />
              </Typography>
              <br />
              <Button
                size={clamp("small", "large")}
                endIcon={<KeyboardArrowRightRoundedIcon />}
                variant="contained"
                disableElevation
                sx={{
                  borderRadius: "20px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
                onClick={() =>
                  isLoggedIn
                    ? document
                        .getElementById("programs")
                        ?.scrollIntoView({ behavior: "smooth" })
                    : router.push("/sign-in")
                }
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            height: clamp("50%", "100%"),
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/poster.svg"
              type="image/svg+xml"
              alt="Illustration"
              style={{
                height: "auto",
                width: "100%",
              }}
              containerStyle={{
                width: "100%",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingScreen;
