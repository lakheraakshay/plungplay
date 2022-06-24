import React from "react";
import { Box } from "@mui/system";
import { Container, Grid, Typography, Stack, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          height: "auto",
          backgroundColor: "#4A4A4A",
          padding: { md: "70px 70px 30px 70px", xs: "30px" },
        }}
      >
        <Container fixed>
          <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            alignContent="center"
            wrap="wrap"
          >
            <Grid item xl="5" md="5" xs="12">
              <img src={require("../../assets/commons/logo.png")} alt="" />
              <br />
              <br />
              <Typography
                sx={{ fontSize: "16px", fontWeight: "600", color: "#fff" }}
              >
                Copyright 2019 The Stalwart Company. All Rights Reserved.
              </Typography>
              {/* <br /> */}
              <Typography
                sx={{ fontSize: "16px", fontWeight: "500", color: "#fff" }}
              >
                Stalwart Business Consortium LLP (SBCL) - A Stalwart World
                Company- INDIA’s first and one of its kind{" "}
                <span style={{ color: "#F1592A" }}>'Plug-N-Play</span> Sales
                Implementation and{" "}
                <span style={{ color: "#F1592A" }}>Route To Market'</span>{" "}
                organization
              </Typography>
            </Grid>
            <Grid item xl="3" md="3" xs="12">
              <br />
              <Typography sx={{ fontSize: "14.5px", color: "#fff" }}>
                <span style={{ fontWeight: "bold" }}>Visit Us</span> : 143-147,
                1st Floor, IJMIMA building, Mindspace Opposite Interface
                Building, behind Goregaon Sports Complex, Malad West, Mumbai,
                Maharashtra - 400064
              </Typography>
              <br /> 
            </Grid>
            <Grid item xl="3" md="3" xs="12">
              {/* <br /> */}
              {/* <br /> */}
              <Stack
                direction="row"
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ backgroundColor: "#fff" }}
                  />
                }
                spacing={2}
                flexWrap="wrap"
              >
                <Box>
                  <Typography
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/gallery")}
                    variant="body1"
                    color="#fff"
                  >
                    Gallery
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/career")}
                    variant="body1"
                    color="#FFF"
                  >
                    Join Us
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/contact-us")}
                    variant="body1"
                    color="#FFF"
                  >
                    Contact Us
                  </Typography>
                </Box>
              </Stack>
              <br />
              {/* <br /> */}
              <Stack direction="row" spacing={3} flexWrap="wrap">
                <Box>
                  <img
                    src={require("../../assets/home/socials (1).png")}
                    alt=""
                  />
                </Box>
                <Box>
                  <img
                    src={require("../../assets/home/socials (2).png")}
                    alt=""
                  />
                </Box>
                <Box>
                  <img
                    src={require("../../assets/home/socials (3).png")}
                    alt=""
                  />
                </Box>
                <Box>
                  <img
                    src={require("../../assets/home/socials (4).png")}
                    alt=""
                  />
                </Box>
              </Stack>
            </Grid>
          </Grid>
          </Container>
          <br/>
          <Typography sx={{ fontSize: "15px", color: "#fff" ,textAlign: "center" }}>
                {`Designed and Developed by `}
                <span
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  STRIX DIGITAL
                </span>
              </Typography>
      </Box>
    </>
  );
};

export default Footer;
