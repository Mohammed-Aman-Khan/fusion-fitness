import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Grid from "@mui/material/Grid";
import Lock from "@mui/icons-material/Lock";
import { vh, vw } from "@/utils/responsive";
import { useState } from "react";

const AdminSignIn = ({ onSignIn = (data) => {} }) => {
  const [adminPassword, setAdminPassword] = useState("");

  const adminLogin = async (e) => {
    try {
      e.preventDefault();
      if (adminPassword !== process.env.ADMIN_PASSWORD) {
        throw new Error("Incorrect password");
      }

      const response = await fetch("/api/admin");

      const data = await response.json();

      if (data.success) {
        delete data.success;
        onSignIn(data);
      } else {
        throw new Error(data.message || "Unknown Error");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
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
        onSubmit={adminLogin}
        style={{
          width: vw(80),
          maxWidth: "400px",
        }}
      >
        <Typography variant="h5">Admin Sign In</Typography>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              InputProps={{
                startAdornment: <Lock />,
              }}
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, borderRadius: "10px" }}
        >
          Sign In
        </LoadingButton>
      </form>
    </Box>
  );
};

export default AdminSignIn;
