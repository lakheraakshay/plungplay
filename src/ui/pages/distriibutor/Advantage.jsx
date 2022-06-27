import React from "react";
import { Box, Grid } from "@mui/material/";
import Typography from "@mui/material/Typography";

const Advantage = () => {
  return (
    <>
      <div>
        <img
          src={require("../../assets/home/stalwartadvantage.png")}
          alt=""
          className="banner-image"
          style={{ width: "100%" }}
        />
      </div>
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
        alignContent="stretch"
        wrap="wrap"
        sx={{ marginTop: "-8px" }}
      >
        <Grid
          item
          xl="8"
          md="8"
          xs="12"
          sx={{ paddingTop: { md: "30px", xs: "10px" }, padding: "0 15px"  }}
        >
          <img
            src={require("../../assets/home/stalwartadvantage2.png")}
            alt=""
            style={{ width: "100%" }}
          /> 
        </Grid>
        <Grid item xl="4" md="4" xs="12" style={{ background: "#f6f6f6" }}>
          <Box sx={{ padding: { md: "29.5px", xs: "20px" } }}>
            <Typography
              fontSize="19px"
              color="#000"
              sx={{ padding: { md: "auto", xs: "20px" } }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  marginBottom: "35px",
                  fontSize: "21px",
                }}
              >
                Stalwart Advantage Supply Chain:
              </div>
              <ul>
                <li style={{ marginBottom: "20px" }}>
                  Stalwart makes Faster, effective, hassle-free territory entry,
                  market expansion and revenue generation for the brands.
                  Stalwart also has options of extending Credit facility to
                  retailers to fast track cash flow to the Distributors to
                  reduce the market outstanding.
                </li>
                <li style={{ marginBottom: "20px" }}>
                  Stalwart runs complete market value chain in GT, MT, HoReCa
                  and Quick Commerce and Marketplaces with Effective execution
                  on Secondary Sales and in store merchandising to ensure faster
                  off take and reduce market outstanding.
                </li>
                <li>
                  Single point billing for the Brand & Distributor that which
                  eases the accounting process.
                </li>
              </ul>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Advantage;
