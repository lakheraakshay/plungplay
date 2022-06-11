import React from "react";
import { Container,  Grid } from "@mui/material/";
import Typography from "@mui/material/Typography";

const Manufacturer = () => {
  return (
    <>
      <div>
        <img
          src={require("../../assets/home/mainbrands.png")}
          alt=""
          style={{ width: "100%", height: "150px" }}
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
        // sx={{ marginTop: "-8px" }}
      >
        <Grid item xl="6" md="6" xs="12">
          <img
                src={require("../../assets/home/problemstatement.png")}
                alt=""
            style={{ width: "100%", height: 550 }}
          />
        </Grid>
        <Grid item xl="6" md="6" xs="12" style={{ padding: "30px" }}>
          <Typography fontSize="20px" fontWeight="600" color="initial">
            Why should a BRAND associate with Stalwart:
          </Typography>
          <br />
          <Typography
            fontSize="20px"
            fontWeight="500"
            color="#323131"
            marginLeft="30px"
          >
            <ul>
              <li>
                Single point billing for the Brand that Stalwart runs which
                eases the accounting process.
              </li>
              <li>
                Stalwart builds, manages and operates complete Sales &
                Distribution, Marketing and Revenue Solutions for you, while you
                focus on brand strengthening and product portfolio.
              </li>
              <li>
                Stalwart runs complete market value chain in GT, MT, HoReCa and
                Quick Commerce and Marketplaces.
              </li>

              <li>
                Faster, effective, hassle-free territory entry, market expansion
                and revenue generation.
              </li>
              <li>
                Asset light and technology driven sales reporting and market
                accounting.
              </li>
              <li>Sustainability and scalability for the Brand.</li>
              <li>
                Reduced cost of selling and optimised efforts by Stalwart’s
                effective ‘Plug-N- Play’ structure.
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
 

      <Container fixed sx={{ margin: { md: "100px auto" } }}>
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          alignContent="stretch"
          wrap="wrap"
        >
          <Container fixed sx={{ margin: "0px auto" }}>
            <Typography fontSize="32px" fontWeight="700" color="#323131">
              Our Approach
            </Typography>
            <img src={require("../../assets/commons/line.png")} alt="" />

            <img
              src={require("../../assets/home/Manufacturer.png")}
              alt=""
              style={{ width: "100%" , objectFit: "contain" }}
            />
            <br />
            {/* <Box textAlign="center">
              <img
                src={require("../../assets/home/problemstatement.png")}
                alt=""
                style={{ width: "80%", height: "600px", objectFit: "contain" }}
              />
            </Box> */}
          </Container>
        </Grid>
      </Container>
    </>
  );
};

export default Manufacturer;
