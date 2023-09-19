import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "../../Shared/Image";
import useClamp from "@/hooks/useClamp";
import { useInView } from "react-intersection-observer";
import Grow from "@mui/material/Grow";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "@/redux/slices/AuthSlice";

const MENU_ITEMS = ["Overview", "Amenities", "Trainers", "Gallery", "Programs"];

const Navbar = () => {
  const clamp = useClamp();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const navbarContent = (
    <>
      <Image
        src="/logo.png"
        alt="Fusion Fitness Logo"
        type="image/png"
        style={{
          height: clamp("95%", "90%", "85%"),
          width: "auto",
          borderRadius: "10px",
        }}
        containerStyle={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {clamp(
          <>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              {open ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {MENU_ITEMS.map((item) => (
                <MenuItem
                  key={item}
                  onClick={() => {
                    document
                      .querySelector(`#${item.toLowerCase()}`)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setAnchorEl(null);
                  }}
                >
                  {item}
                </MenuItem>
              ))}
              <MenuItem
                onClick={() => {
                  if (isLoggedIn) {
                    dispatch(signOut());
                  } else {
                    router.push("/sign-in");
                    setAnchorEl(null);
                  }
                }}
              >
                Sign {isLoggedIn ? "Out" : "In"}
              </MenuItem>
            </Menu>
          </>,
          undefined,
          <>
            {MENU_ITEMS.map((item) => (
              <Button
                key={item}
                sx={{
                  borderRadius: "20px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  marginRight: "5px",
                }}
                onClick={() =>
                  document
                    .querySelector(`#${item.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {item}
              </Button>
            ))}
            <Button
              sx={{
                borderRadius: "20px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              disableElevation
              variant="contained"
              onClick={() => {
                if (isLoggedIn) {
                  dispatch(signOut());
                } else {
                  router.push("/sign-in");
                  setAnchorEl(null);
                }
              }}
            >
              Sign {isLoggedIn ? "Out" : "In"}
            </Button>
          </>
        )}
      </Box>
    </>
  );

  return (
    <>
      <Box
        ref={ref}
        sx={{
          height: clamp("50px", "60px", "70px"),
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {navbarContent}
      </Box>
      <Grow in={!inView}>
        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: "15px",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            position: "fixed",
            zIndex: 1,
            top: "10px",
            left: "7.5vw",
            width: "85vw",
            height: clamp("50px", "60px", "70px"),
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: `${clamp("5px", "7.5px", "10px")}`,
          }}
        >
          {navbarContent}
        </Box>
      </Grow>
    </>
  );
};

export default Navbar;
