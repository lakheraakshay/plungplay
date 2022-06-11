import React from "react";
import About from "./About";
import Clients from "./Clients";
import Products from "./Products";
import ProductSlider from "./ProductSlider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HomeSlider from "./HomeSlider";

const Home = () => {
  return (
    <>
      <div style={{ background: "#d9d9d9" }}>
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          alignContent="center"
          wrap="wrap"
        >
          <Grid
            item
            xl="5"
            md="5"
            xs="12"
            sx={{
              paddingLeft: { md: "70px", xs: "50px" },
              paddingRight: { md: "70px", xs: "50px" },
              paddingTop: { md: "70px", xs: "50px" },
              paddingBottom: "0px",
            }}
          >
            <img
              src={require("../../assets/home/greatbrand.png")}
              alt=""
              style={{ width: "100px" }}
            />
            <Typography fontSize="16px" fontWeight="600">
              World’s Greatest Brand
            </Typography>
            <br />
            <br />
            <Typography
              sx={{ fontSize: { md: "40px", xs: "30px" } }}
              fontWeight="700"
              style={{ lineHeight: "45px" }}
            >
              INDIA'S FIRST AND ONLY{" "}
              <span style={{ color: "#F1592A" }}> 'PLUG-N-PLAY'</span> SALES
              IMPLEMENTATION AND{" "}
              <span style={{ color: "#F1592A" }}> 'ROUTE TO MARKET'</span>{" "}
              ORGANIZATION
            </Typography>
            <br />
            <br />
          </Grid>
          <Grid
            item
            xl="7"
            md="7"
            xs="12"
            sx={{
              textAlign: "center",
              paddingTop: "70px",
              paddingLeft: "70px",
              paddingRight: "70px",
              paddingBottom: "0px",
              background: "#000",
            }}
          >
            {/* <div style={{ background: "black" }}> */}
            <div>
              <HomeSlider />
            </div>
          </Grid>
        </Grid>
      </div>
      <About />
      <ProductSlider />
      <Products />
      <Clients />
    </>
  );
};

export default Home;
