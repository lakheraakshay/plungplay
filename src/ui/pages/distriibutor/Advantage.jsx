import React from "react";
import { Box,  Grid } from "@mui/material/";
import Typography from "@mui/material/Typography";

const Advantage = () => {
  return (
    <>
      <div>
        <img
          src={require("../../assets/home/stalwartadvantage.png")}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        alignContent="stretch"
        wrap="wrap"
        sx={{ marginTop: "-8px" }}
      >
        <Grid item xl="8" md="8" xs="12" sx={{paddingTop:{md:'20px',xs:'0'}}}>
          <img
            src={require("../../assets/home/stalwartadvantage2.png")}
            alt=""
            style={{ width: "100%", }}
          />
        </Grid>
        <Grid item xl="4" md="4" xs="12" style={{ background: "#f6f6f6" }}>
          <Box sx={{ padding: { md: "50px", xs: "20px" } }}>
            <Typography fontSize="20px" color="#000" sx={{padding: { md: "auto",xs:"20px"}}}>
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
                  Single point billing for the Brand that Stalwart runs which
                  eases the accounting process.
                </li>
                <li style={{ marginBottom: "20px" }}>
                  Stalwart builds, manages and operates complete Sales &
                  Distribution, Marketing and Revenue Solutions for you, while
                  you focus on brand strengthening and product portfolio.
                </li>
                <li>
                  Stalwart runs complete market value chain in GT, MT, HoReCa
                  and Quick Commerce and Marketplaces.
                  
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
