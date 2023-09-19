import Image from "@/components/Shared/Image";
import useClamp from "@/hooks/useClamp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import LoadingButton from "@mui/lab/LoadingButton";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";
import { useState } from "react";

const Footer = () => {
  const clamp = useClamp();
  const [loading, setLoading] = useState(false);

  const subscribeToNewsletter = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData(e.target);
      const email = formData.get("email");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error("Invalid email address");
      }

      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        alert("Subscribed successfully");
        e.target.reset();
      } else {
        throw new Error(data.message || "Unknown Error");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const contactUs = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData(e.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      if (!name || !email || !message) {
        throw new Error("Please fill all the fields");
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        alert("Submitted successfully");
        e.target.reset();
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
    <Box
      sx={{
        padding: clamp("25px", "25px 50px", "25px 75px"),
        backgroundColor: (theme) => theme.palette.primary.dark,
        color: "white",
      }}
    >
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              type="image/png"
              src="/logo.png"
              alt="Fusion Fitness"
              width={clamp("75px", "100px", "125px")}
              style={{
                borderRadius: "10px",
              }}
            />
            <Box
              ml={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Typography variant={clamp("h6", "h5", "h4")}>
                Fusion Fitness
              </Typography>
              <Typography variant="caption">Bangalore</Typography>
            </Box>
          </Box>
          <br />
          <Typography>Subscribe to our newsletter</Typography>
          <form
            onSubmit={subscribeToNewsletter}
            style={{
              padding: "5px",
              backgroundColor: "white",
              borderRadius: "10px",
              display: "flex",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Email"
              name="email"
              inputProps={{ "aria-label": "subscribe to newsletter" }}
            />
            <LoadingButton
              loading={loading}
              variant="contained"
              size="small"
              type="submit"
              loadingPosition="end"
              sx={{ ml: 1, borderRadius: "10px" }}
              endIcon={<MarkEmailReadRoundedIcon />}
            >
              Subscribe
            </LoadingButton>
          </form>
        </Grid>
        <Grid item xs={0} sm={4} md={4} />
        <Grid item xs={12} sm={4} md={4}>
          <Typography mb={1} variant={clamp("body1", "h6")}>
            Contact Us
          </Typography>
          <form onSubmit={contactUs}>
            <InputBase
              sx={{
                backgroundColor: "white",
                padding: "5px 15px",
                borderRadius: "10px",
                mb: 1,
              }}
              placeholder="Name"
              name="name"
              fullWidth
            />
            <InputBase
              sx={{
                backgroundColor: "white",
                padding: "5px 15px",
                borderRadius: "10px",
                mb: 1,
              }}
              placeholder="Email"
              name="email"
              fullWidth
            />
            <InputBase
              sx={{
                backgroundColor: "white",
                padding: "5px 15px",
                borderRadius: "10px",
                mb: 1,
              }}
              multiline
              placeholder="Message"
              name="message"
              fullWidth
            />
            <LoadingButton
              loading={loading}
              variant="contained"
              size="small"
              type="submit"
              loadingPosition="end"
              sx={{
                borderRadius: "10px",
                float: "right",
                backgroundColor: "white",
                color: (t) => t.palette.primary.light,
                "&:hover": {
                  backgroundColor: (t) => t.palette.common.white,
                },
              }}
            >
              Submit
            </LoadingButton>
          </form>
        </Grid>
      </Grid>
      <br />
      <center>
        <Typography variant="button">
          @{new Date().getFullYear()} - Fusion Fitness
        </Typography>
      </center>
    </Box>
  );
};

export default Footer;
