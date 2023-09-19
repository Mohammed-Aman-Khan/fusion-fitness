import useClamp from "@/hooks/useClamp";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { formatCurrency, toKebabCase } from "@/utils/helpers";
import { useSelector } from "react-redux";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import moment from "moment";

const PROGRAMS = [
  {
    name: "Yoga",
    description:
      "Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. Yoga is one of the six orthodox philosophical schools of Hinduism.",
    pricing: [
      {
        duration: "1 Month",
        price: 1000,
      },
      {
        duration: "3 Months",
        price: 2500,
      },
      {
        duration: "6 Months",
        price: 5000,
      },
    ],
  },
  {
    name: "Cardio",
    description:
      "Cardiovascular exercise, also known as cardio or aerobic exercise, is essential for good health. It gets your heart rate up, making you blood pump faster. This delivers more oxygen throughout your body, which keeps your heart and lungs healthy.",
    pricing: [
      {
        duration: "1 Month",
        price: 2000,
      },
      {
        duration: "3 Months",
        price: 5000,
      },
      {
        duration: "6 Months",
        price: 10500,
      },
    ],
  },
  {
    name: "Zumba",
    description:
      "Zumba is a fitness program that combines Latin and international music with dance moves. Zumba routines incorporate interval training — alternating fast and slow rhythms — to help improve cardiovascular fitness.",
    pricing: [
      {
        duration: "1 Month",
        price: 3000,
      },
      {
        duration: "3 Months",
        price: 8000,
      },
      {
        duration: "6 Months",
        price: 16000,
      },
    ],
  },
  {
    name: "Weight Lifting",
    description:
      "Weight training is a common type of strength training for developing the strength and size of skeletal muscles. It utilizes the force of gravity in the form of weighted bars, dumbbells or weight stacks in order to oppose the force generated by muscle through concentric or eccentric contraction.",
    pricing: [
      {
        duration: "1 Month",
        price: 800,
      },
      {
        duration: "3 Months",
        price: 2000,
      },
      {
        duration: "6 Months",
        price: 4300,
      },
    ],
  },
];

const Index = () => {
  const clamp = useClamp();
  const router = useRouter();
  const { isLoggedIn, userId } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [enrollDialog, setEnrollDialog] = useState(false);
  const [programCode, setProgramCode] = useState("");
  const [startingDate, setStartingDate] = useState(moment());
  const [duration, setDuration] = useState(3);

  const enroll = async (program_code, duration, startingDate) => {
    try {
      setLoading(true);
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          program_code: toKebabCase(program_code),
          duration,
          user_id: userId,
          starting_date: startingDate,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Enrolled Successfully");
        setEnrollDialog(false);
        setProgramCode("");
        setStartingDate(moment());
        setDuration(3);
        setLoading(false);
      } else {
        throw new Error(data.message || "Unknown Error");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        id="programs"
        sx={{
          padding: clamp("25px", "50px", "75px"),
          background: "rgb(0,0,0)",
          background:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(43,46,74,1) 50%, rgba(62,66,106,1) 100%)",
        }}
      >
        <center>
          <Typography color="white" variant="h4">
            Programs
          </Typography>
          <br />
          <br />
        </center>
        <Grid container spacing={5}>
          {PROGRAMS.map(({ name, description, pricing }, index) => {
            return (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    padding: clamp("15px", "20px", "25px"),
                    backgroundColor: "transparent",
                    borderRadius: clamp("10px", "15px", "20px"),
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0px 18px 40px -12px rgba(255, 255, 255, 0.3)",
                    backgroundColor: "white",
                  }}
                >
                  <Typography
                    sx={{ color: "black", letterSpacing: "3px" }}
                    variant={clamp("h5", "h4")}
                  >
                    {name}
                  </Typography>
                  <br />
                  <Typography
                    sx={{ color: "black" }}
                    variant={clamp("body2", "body1")}
                  >
                    {description}
                  </Typography>
                  <br />
                  <Grid container spacing={2} sx={{ marginBottom: "50px" }}>
                    {pricing.map(({ duration, price }, index) => {
                      return (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                          <Box
                            sx={{
                              padding: clamp("15px", "20px", "25px"),
                            }}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                letterSpacing: clamp("1px", "2px", "3px"),
                              }}
                              variant={clamp("caption", "body2", "body1")}
                            >
                              {duration}
                            </Typography>
                            <Typography
                              sx={{ color: "black" }}
                              variant={clamp("body1", "h6", "h5")}
                            >
                              {formatCurrency(price)}
                            </Typography>
                          </Box>
                        </Grid>
                      );
                    })}
                    <Grid item sx={12} sm={4}>
                      <LoadingButton
                        disabled={loading}
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{ borderRadius: "10px" }}
                        onClick={() => {
                          if (isLoggedIn) {
                            setEnrollDialog(true);
                            setProgramCode(name);
                          } else {
                            router.push("/sign-in");
                          }
                        }}
                      >
                        Get Started
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Dialog
        open={enrollDialog}
        // maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: "10px",
          },
        }}
      >
        <DialogTitle>
          <Typography variant="h5">Enroll into {programCode}</Typography>
        </DialogTitle>
        <DialogContent>
          <br />
          <FormControl fullWidth>
            <InputLabel id="duration">Duration</InputLabel>
            <Select
              labelId="duration"
              value={duration}
              label="Duration"
              onChange={(event) => setDuration(event.target.value)}
            >
              <MenuItem value={1}>1 Month</MenuItem>
              <MenuItem value={3}>3 Months</MenuItem>
              <MenuItem value={6}>6 Months</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <Typography>Starting Date</Typography>
          <DateCalendar value={startingDate} onChange={setStartingDate} />
        </DialogContent>
        <DialogActions>
          <LoadingButton
            disabled={loading}
            sx={{ borderRadius: "10px" }}
            onClick={() => {
              setEnrollDialog(false);
              setProgramCode("");
            }}
          >
            Close
          </LoadingButton>
          <LoadingButton
            loading={loading}
            sx={{ borderRadius: "10px" }}
            variant="contained"
            onClick={() => enroll(programCode, duration, startingDate)}
          >
            Submit
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Index;
