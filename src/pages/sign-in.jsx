import React from "react";
import { Box, Typography, TextField, Button, Grid, Paper } from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import { vh, vw } from "@/utils/responsive";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useDispatch } from "react-redux";
import { signIn } from "@/redux/slices/AuthSlice";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

const SignInPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const email = formData.get("email");
      const password = formData.get("password");

      const response = await fetch("/api//sign-in", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        e.target.reset();
        dispatch(signIn(data.user._id));
        router.push("/");
      } else {
        throw new Error(data.message || "Unknown Error");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Box
        sx={{
          height: vh(100),
          padding: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: vw(80),
            maxWidth: "400px",
          }}
        >
          <Typography variant="h5">Sign In</Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                InputProps={{
                  startAdornment: <Email />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputProps={{
                  startAdornment: <Lock />,
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, borderRadius: "10px" }}
          >
            Sign In
          </Button>
          <Typography variant="body2" mt={2}>
            Don't have an account? <Link href="/sign-up">Sign Up</Link>
          </Typography>
        </form>
      </Box>
      <Link href="/">
        <IconButton sx={{ position: "absolute", top: "10px", left: "10px" }}>
          <ArrowBackRoundedIcon />
        </IconButton>
      </Link>
    </>
  );
};

export default SignInPage;
