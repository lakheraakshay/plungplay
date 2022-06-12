import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton,
  Container,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useStyles } from "./Style";
const Links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about-us",
  },
  {
    title: "Stalwart Advantage",
    url: "/advantage",
  },
  {
    title: "Brands",
    url: "/manufactures",
  },
  {
    title: "Distributor",
    url: "/distributor",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
  },
];

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1150));
  const [open, setOpen] = React.useState(false);
  const handleDrawer = (bool) => () => {
    setOpen(bool);
  };
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          boxShadow: "none",
          background: "#fff",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <Toolbar>
          <Box flexGrow="1">
            <NavLink to="/">
              <img
                src={require("../../assets/commons/logo.png")}
                alt=""
                className={classes.logoImg}
              />
            </NavLink>
          </Box>
          {!isMobile && (
            <Toolbar>
              {Links.map((item, i) => (
                <NavLink
                  to={item.url}
                  className={classes.heading}
                  style={({ isActive }) => ({
                    color: "#000",
                    fontWeight: isActive ? "800" : "500",
                    marginLeft: "20px",
                    border: isActive && "1px solid #F1592A",
                    padding: "10px",
                    borderRadius: "5px",
                    background: isActive && "#F1592A",
                  })}
                >
                  {item.title}
                </NavLink>
              ))}
            </Toolbar>
          )}
          {isMobile && (
            <IconButton onClick={handleDrawer(true)}>
              <MenuOpenRoundedIcon color="primary" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="bottom"
        onClose={handleDrawer(false)}
        open={isMobile && open}
        PaperProps={{
          sx: {
            background: "rgba( 19, 11, 70, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 4px )",
            WebkitBackdropFilter: "blur( 4px )",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            height: "auto",
            borderRadius: "20px 20px 0 0",
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <KeyboardArrowUpIcon
            sx={{ color: "#fff" }}
            onClick={handleDrawer(false)}
          />
          <br />
          {Links.map((item, i) => (
            <NavLink
              to={item.url}
              onClick={handleDrawer(false)}
              className={classes.heading}
              style={{ textDecoration: "none" }}
            >
              <Typography color="#fff" sx={{ marginBottom: "20px" }}>
                {item.title}
              </Typography>
            </NavLink>
          ))}
          <br />
          <br />
          <NavLink to="/">
            <img src={require("../../assets/commons/logo.png")} alt="" />
          </NavLink>
          <br />
          <br />
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
