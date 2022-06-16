import React from "react";
import { Box, Grid } from "@mui/material/";
import Typography from "@mui/material/Typography";

const Distributor = () => {
  return (
    <>
      <div>
        <img
          src={require("../../assets/home/distributorheader.png")}
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
        <Grid item xl="7" md="7" xs="12">
          <img
            src={require("../../assets/home/infographic.png")}
            alt=""
            style={{ width: "100%", marginBottom: "-7px" }}
          />
        </Grid>
        <Grid item xl="5" md="5" xs="12" sx={{ background: "#f6f6f6" }}>
          <Box sx={{ padding: { md: "50px", xs: "20px" } }}>
            <Typography fontSize="20px" color="#000" sx={{ padding: { md: '0', xs: '20px' } }}>
              <div style={{ fontWeight: "bold", marginBottom: "35px", fontSize: '22px' }}>
                Why should a Distributor associate with Stalwart:
              </div>
              <ul>
                <li style={{ marginBottom: "20px" }}>
                  Opportunity to work with multiple brands that Stalwart has
                  associated with.
                </li>
                <li style={{ marginBottom: "20px" }}>
                  Business Model is customised for each Distributor according to
                  brand portfolio and market dynamics and consumer preference to
                  ensure faster secondary sales resulting into better ROI.
                </li>
                <li style={{ marginBottom: "20px" }}>
                  Single point of billing for effective and easy accounting.
                </li>
                <li style={{ marginBottom: "20px" }}>
                  Effective execution on Secondary Sales and in store
                  merchandising to ensure faster off take and reduce market
                  outstanding.
                </li>
                <li style={{ marginBottom: "20px" }}>
                  Credit facility to retailers to fast track cash flow to the
                  Distributors to reduce the market outstanding.
                </li>
                <li style={{ marginBottom: "20px" }}>
                  Focus on zero dumping at Distributor and Retailer's points.
                  Why should a Distributor associate with Stalwart.
                </li>
              </ul>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* <Container fixed sx={{ margin: { md: "100px auto" } }}>
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          alignContent="stretch"
          wrap="wrap"
        > */}
      {/* <Grid item xl="6" md="6" xs="12">
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
                  Distribution, Marketing and Revenue Solutions for you, while
                  you focus on brand strengthening and product portfolio.
                </li>
                <li>
                  Stalwart runs complete market value chain in GT, MT, HoReCa
                  and Quick Commerce and Marketplaces.
                </li>

                <li>
                  Faster, effective, hassle-free territory entry, market
                  expansion and revenue generation.
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
          </Grid> */}
      {/* <Grid
            item
            xl="5"
            md="5"
            xs="12"
            // sx={{ background: "#EAEAEA", position: "absolute", right: "0" }}
          > */}
      {/* <Container fixed sx={{ margin: "0px auto" }}>
            <Typography fontSize="32px" fontWeight="700" color="#323131">
              Our Approach
            </Typography>
            <img src={require("../../assets/commons/line.png")} alt="" />
            <br />
            <Box textAlign="center">
              <img
                src={require("../../assets/home/problemstatementdist.png")}
                alt=""
                style={{ width: "80%" }}
              />
            </Box>
          </Container> */}

      {/* <Box sx={{ padding: '50px' }}>
                            <Typography fontSize="22px" fontWeight="500" color="#323131" marginLeft="30px">
                                Media Coverage & Achievements:
                            </Typography>
                            <br />
                            <Typography fontSize="20px" color="#F15A29" marginLeft="30px">
                                <li>
                                    “World’s Greatest Brands and Leaders for 2021-2022” by Asia One for the innovation and scalability of our business model.
                                </li>
                                <br />
                                <li>
                                    Featured on cover page of “The Global Hues" for the uniqueness & scale of our exclusive business model.
                                </li>
                                <br />
                                <li>
                                    “The Outstanding Consulting Firms in 2019”
                                </li>
                                <br />
                                <li>
                                    “10 Most Creative CEOs to Watch in 2019"
                                </li>
                                <br />
                                <li>
                                    “10 most admired companies in 2019”
                                </li>
                            </Typography>
                        </Box> */}
      {/* </Grid> */}
      {/* </Grid>
      </Container> */}

      {/* <Container fixed sx={{ margin: { md: '150px auto' } }}>
                <img src={require("../../assets/home/ditgraph.png")} alt="" style={{ width: '100%' }} />
            </Container> */}
      {/* <Container fixed sx={{ margin: { md: "50px auto" } }}>
        <Typography fontSize="32px" fontWeight="700" color="initial">
          Brands
        </Typography>
        <img src={require("../../assets/commons/line.png")} alt="" />
        <br /> <br /> <br />
        <Slider {...settings}>
          <Box>
            <img src={require("../../assets/home/brands (1).png")} alt="" />
          </Box>
          <Box>
            <img src={require("../../assets/home/brands (2).png")} alt="" />
          </Box>
          <Box>
            <img src={require("../../assets/home/brands (3).png")} alt="" />
          </Box>
          <Box>
            <img src={require("../../assets/home/brands (4).png")} alt="" />
          </Box>
        </Slider>
      </Container> */}
    </>
  );
};

export default Distributor;
