import React from "react";
import { Box } from "@mui/material/";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const About = () => {
  return (
    <>
      <Box
        sx={{
          background:
            "#fff",
          height: { md: "100vh", xs: "auto" },
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          sx={{ height: { md: "100vh", xs: "auto" } }}
        >
          <Grid item xl="6" md="6" xs="12">
            <img
              src={require("../../assets/home/about.png")}
              alt=""
              style={{ height: "100vh", width: "100%", marginBottom: "-5px" }}
            />
          </Grid>
          <Grid item xl="6" md="6" xs="12">
            <Box sx={{ padding: { md: "10%", xs: "30px" } }}>
              <Typography fontSize="32px" fontWeight="700" color="#000">
                About Us
              </Typography>
              <img src={require("../../assets/commons/line.png")} alt="" />
              <br />
              <br />
              <Typography variant="body1" color="#000">
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
                <br /> <br />
                <b> At Stalwart, we are building:</b> <br />
                1) India’s fastest growing
                <span className="redcol"> 'Route to Market </span>
                company' that makes market entry and presence quick, easy,
                affordable and hassle free! No wonder FMCG Brands love us.
                <br /> 2) India’s largest and widest Sales & Distribution
                Network. Our Channel partners see huge merit in working with us
                since we’re a multi-brand organization with a massive brand
                portfolio.
                <br /> 3) India’s fastest growing FMCG (F&B & HPC) Sales Team to
                offer a<span className="redcol"> ‘Plug-N-Play’ </span>
                sales infrastructure to our clients.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
