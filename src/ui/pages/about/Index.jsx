import React from "react";
import { Container, Box } from "@mui/material/";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Team from "./Team";

const About = () => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Container fixed>
          <Grid container>
            <Grid
              item
              xl="6"
              md="6"
              xs="12"
              sx={{ padding: { md: "30px 50px 0 0", xs: "20px" } }}
            >
              <Typography fontSize="32px" fontWeight="700" color="#323131">
                About Us
              </Typography>
              <img src={require("../../assets/commons/line.png")} alt="" />

              <br />
              <br />
              <Typography fontSize="20px" fontWeight="500" color="#323131">
                <span className="colred">
                  Stalwart Business Consortium LLP (SBCL)
                </span>{" "}
                - a Stalwart World Company- is INDIA’s first and one of its kind
                <span className="redcol"> 'Plug-N-Play </span>
                Sales Implementation and
                <span className="redcol"> Route To Market' </span>
                organization that partners with EARLY and GROWTH Stage FMCG (F&B
                & HPC) Brands to offer 360 degree RETAIL SALES & MARKET
                solutions across 100+ locations in the country. We are the
                preferred 'Go-To Partners' for Manufacturers, Stockists,
                Distributors and Wholesalers who are looking to increase their
                turnover in 'General Trade, Modern Trade, HoReCa and in Market
                Places.'
              </Typography>
              <br />
              <Typography fontSize="20px" fontWeight="500" color="#323131">
                {/* <b> AT STALWART, WE ARE BUILDING:</b> */}
                <br />
                India’s fastest growing
                <span className="redcol"> 'Route to Market' </span>
                company' that makes market entry and presence quick, easy,
                affordable and hassle free! No wonder FMCG Brands love us.
              </Typography>
            </Grid>
            <Grid item xl="6" md="6" xs="12">
              {/* <img
                src={require("../../assets/home/aboutcover.png")}
                alt=""
                style={{ position: "absolute", right: "0" }}
              /> */}
              <img
                src={require("../../assets/home/ouraproach.png")}
                alt=""
                style={{ width: "100%", marginTop: "6rem" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container fixed sx={{ margin: "100px auto" }}>
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          <Grid item xl="6" md="6" xs="12">
            <Box
              sx={{
                padding: "20px",
                background: "#F6F6F6",
                borderRadius: "5px",
              }}
            >
              <Typography
                gutterBottom
                fontSize="32px"
                fontWeight="700"
                color="#323131"
              >
                Vision Statement
              </Typography>
              <br />
              <Typography fontSize="18px" fontWeight="500" color="#323131">
                <span className="colred">
                  {" "}
                  Stalwart Business Consortium LLP (SBCL)
                </span>{" "}
                - a Stalwart World Company- is INDIA’s first and one of its kind
                <span className="redcol"> 'Plug-N-Play </span>
                Sales Implementation and
                <span className="redcol"> Route To Market' </span>
                organization that partners with EARLY and GROWTH Stage FMCG (F&B
                & HPC) Brands to offer 360 degree RETAIL SALES & MARKET
                solutions across 100+ locations in the country.
              </Typography>
            </Box>
          </Grid>
          <Grid item xl="6" md="6" xs="12">
            <Box
              sx={{
                padding: "20px",
                background: "#F6F6F6",
                borderRadius: "5px",
              }}
            >
              <Typography
                gutterBottom
                fontSize="32px"
                fontWeight="700"
                color="#323131"
              >
                Mission Statement
              </Typography>
              <br />
              <Typography fontSize="18px" fontWeight="500" color="#323131">
                <span className="colred">
                  {" "}
                  Stalwart Business Consortium LLP (SBCL)
                </span>{" "}
                - a Stalwart World Company- is INDIA’s first and one of its kind
                <span className="redcol"> 'Plug-N-Play </span>
                Sales Implementation and
                <span className="redcol"> Route To Market'</span>
                organization that partners with EARLY and GROWTH Stage FMCG (F&B
                & HPC) Brands to offer 360 degree RETAIL SALES & MARKET
                solutions across 100+ locations in the country.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

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
        <Grid item xl="6" md="6" xs="12">
          <img
            src={require("../../assets/home/supplychain2.png")}
            alt=""
            style={{ width: '100%',  marginBottom: "-7px" }}
          />
        </Grid>
        <Grid item xl="6" md="6" xs="12" sx={{ background: "#EAEAEA" }}>
          <Box sx={{ padding: { md: "50px", xs: "20px" } }}>
            <Typography fontSize="20px" color="#323131">
              <div style={{ fontWeight: "bold", marginBottom: "40px", fontSize: 32 }}>
                At Stalwart, we are building:
              </div>
              <ul>
                <li style={{ marginBottom: "30px" }}>
                  India’s fastest growing 'Route to Market company' that makes
                  market entry and presence quick, easy, affordable and hassle
                  free! No wonder FMCG Brands love us.
                </li>
                <li style={{ marginBottom: "30px" }}>
                  India’s largest and widest Sales & Distribution Network. Our
                  Channel partners see huge merit in working with us since we’re
                  a multi-brand organization with a massive brand portfolio.
                </li>
                <li style={{ marginBottom: "30px" }}>
                  India’s fastest growing FMCG (F&B & HPC) Sales Team to offer a
                  ‘Plug-N-Play’ sales infrastructure to our clients.
                </li>
              </ul>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Team />
    </>
  );
};

export default About;
