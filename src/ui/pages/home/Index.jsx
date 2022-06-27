import React from "react";
import About from "./About";
import Clients from "./Clients";
import Products from "./Products";
import ProductSlider from "./ProductSlider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CountUp from "react-countup";
import { Box } from "@mui/material/";
import HomeSlider from "./HomeSlider";

const Home = () => {
  return (
    <>
      <div
        style={{ background: "linear-gradient(180deg, #fff, #fff, #4a4a4a)" }}
      >
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
            xl="6"
            md="6"
            xs="12"
            sx={{
              paddingLeft: { md: "50px", xs: "10px" },
              paddingRight: { md: "50px", xs: "10px" },
              paddingTop: { md: "50px", xs: "10px" },
              paddingBottom: { md: "0px", xs: "0px" },
            }}
          >
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
                xl="12"
                md="12"
                xs="12"
                sx={{
                  paddingLeft: { md: "40px", xs: "0px" },
                  // paddingTop: { md: "40px", xs: "0px" },
                  paddingBottom: { md: "50px", xs: "20px" },
                }}
              >
                <div>
                  <Typography
                    sx={{ fontSize: { md: "32px", xs: "30px" } }}
                    fontWeight="700"
                    style={{ lineHeight: "35px" }}
                  >
                    INDIA'S FIRST AND ONLY{" "}
                    <span style={{ color: "#F1592A" }}> 'PLUG-N-PLAY'</span>{" "}
                    SALES IMPLEMENTATION AND{" "}
                    <span style={{ color: "#F1592A" }}> 'ROUTE TO MARKET'</span>{" "}
                    ORGANIZATION
                  </Typography>
                </div>
              </Grid>
              <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
              >
                <Grid item xl="4" md="4" xs="6">
                  <Box
                    className="whiteback"
                    sx={{
                      border: "0.5px solid #e6e6e6",
                      padding: "15px 0px",
                      textAlign: "center",
                      alignSelf: "center",
                    }}
                  >
                    <Typography
                      fontSize="22px"
                      fontWeight="700"
                      color="#070707"
                    >
                      <CountUp end={500} /> cr
                    </Typography>
                    <Typography
                      fontSize="14px"
                      fontWeight="700"
                      color="#070707"
                    >
                      SALES PORTFOLIO
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xl="4" md="4" xs="6">
                  <Box
                    className="whiteback"
                    sx={{
                      border: "0.5px solid #e6e6e6",
                      padding: "15px 30px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      fontSize="22px"
                      fontWeight="700"
                      color="#070707"
                    >
                      <CountUp end={306} />
                    </Typography>
                    <Typography
                      fontSize="14px"
                      fontWeight="700"
                      color="#070707"
                    >
                      SALESFORCE
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xl="4" md="4" xs="6">
                  <Box
                    className="whiteback"
                    sx={{
                      border: "0.5px solid #e6e6e6",
                      padding: "15px 30px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      fontSize="22px"
                      fontWeight="700"
                      color="#070707"
                    >
                      <CountUp end={103} />
                    </Typography>
                    <Typography
                      fontSize="14px"
                      fontWeight="700"
                      color="#070707"
                    >
                      LOCATIONS
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xl="4" md="4" xs="6">
                  <Box
                    className="whiteback"
                    sx={{
                      border: "0.5px solid #e6e6e6",
                      padding: "15px 30px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      fontSize="22px"
                      fontWeight="700"
                      color="#070707"
                    >
                      <CountUp end={508} />
                    </Typography>
                    <Typography
                      fontSize="14px"
                      fontWeight="700"
                      color="#070707"
                    >
                      DISTRIBUTORS
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xl="4" md="4" xs="6">
                  <Box
                    className="whiteback"
                    sx={{
                      border: "0.5px solid #e6e6e6",
                      padding: "15px 30px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      fontSize="22px"
                      fontWeight="700"
                      color="#070707"
                    >
                      <CountUp end={125673} />
                    </Typography>
                    <Typography
                      fontSize="14px"
                      fontWeight="700"
                      color="#070707"
                    >
                      OUTLETS
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xl="4" md="4" xs="6">
                  <Box
                    className="whiteback"
                    sx={{
                      border: "0.5px solid #e6e6e6",
                      padding: "15px 30px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      fontSize="22px"
                      fontWeight="700"
                      color="#070707"
                    >
                      <CountUp end={2524672} />
                    </Typography>
                    <Typography
                      fontSize="14px"
                      fontWeight="700"
                      color="#070707"
                    >
                      CONSUMERS
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              {/* <br /> */}
            </Grid>
          </Grid>
          <Grid
            item
            xl="6"
            md="6"
            xs="12"
            sx={{
              textAlign: "center",
              // paddingTop: "50px",
              paddingLeft: "10px",
              paddingRight: "15px",
              paddingBottom: "30px",
              background: "linear-gradient(180deg, #fff, #fff, #4a4a4a)",
            }}
          >
            <div>
              <Typography
                sx={{
                  fontSize: { md: "22px", xs: "18px" },
                  color: "#F1592A",
                  marginBottom: 3,
                  marginTop:{md:'0',xs:'20px'},
                }}
                fontWeight="700"
              >
                Awarded at Asiaone Annual summit 2021-22
              </Typography>
            </div>
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
                  // paddingLeft: { md: "40px", xs: "0px" },
                  paddingTop: { md: "0px", xs: "0px" },
                  // paddingBottom: { md: "80px", xs: "20px" },
                }}
              >
                <div style={{ marginBottom: 17 }}>
                  <img
                    src={require("../../assets/home/brandaward.png")}
                    alt=""
                    style={{ width: "250px", marginBottom: 15 }}
                    className="img-plate"
                  />
                  <Typography fontSize="18.5px" fontWeight="600">
                    Stalwart World <br /> 'World's Greatest Brand 2021-22'
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                xl="2"
                md="2"
                xs="12"
                sx={{
                  paddingTop: { md: "0px", xs: "0px" },
                }}
                style={{ marginLeft: "-40px" }}
              >
                <img
                  src={require("../../assets/home/asiaone.png")}
                  alt=""
                  style={{ width: "170px" }}
                  // className="img-plate"
                />
              </Grid>
              <Grid
                item
                xl="5"
                md="5"
                xs="12"
                sx={{
                  // paddingLeft: { md: "0px", xs: "0px" },
                  paddingTop: { md: "0px", xs: "0px" },
                  // paddingBottom: { md: "80px", xs: "20px" },
                }}
              >
                <div style={{ marginBottom: 17 }}>
                  <img
                    src={require("../../assets/home/leader.png")}
                    alt=""
                    style={{ width: "250px", marginBottom: 15 }}
                    className="img-plate"
                  />
                  <Typography fontSize="18px" fontWeight="600">
                    Divyashikha Gupta-CEO & MD <br />'World’s Greatest Leaders
                    2021-22'
                  </Typography>
                </div>
              </Grid>
            </Grid>
            {/* <div>
              <Typography
                sx={{
                  fontSize: { md: "18px", xs: "16px" },
                  color: "#070707",
                }}
                fontWeight="700"
              >
                'Divyashikha Gupta' – 'CEO & Managing Director' – 'Stalwart
                World Group' – Awarded as the
                <span className="bluecol">
                  {` ' World’s Greatest Leaders 2021-22 ' `}
                </span>
              </Typography>
            </div> */}
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
