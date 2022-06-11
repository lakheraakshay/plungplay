import React from "react";
import { Container, Box } from "@mui/material/";
import Slider from "react-slick";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CountUp from "react-countup";

const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box sx={{ background: "#F1592A", padding: { md: "50px ", xs: "auto" } }}>
        <Container fixed>
          <Slider {...settings}>
            {new Array(5).fill("").map((item, i) => (
              <>
                <Box>
                  <img
                    src={require(`../../assets/home/homeprodslider (${
                      i + 1
                    }).png`)}
                    alt=""
                  />
                </Box>
              </>
            ))}
          </Slider>
          {/* <br />
          <br /> <br /> <br />
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
          >
            <Grid item xl="4" md="4" xs="12">
              <Box
                className="blueback"
                sx={{
                  border: "0.5px solid #e6e6e6",
                  padding: "30px 50px",
                  textAlign: "center",
                }}
              >
                <Typography fontSize="40px" fontWeight="700" color="#fff">
                  <CountUp end={500} /> cr
                </Typography>
                <Typography fontSize="16px" fontWeight="700" color="#fff">
                  SALES PORTFOLIO
                </Typography>
              </Box>
            </Grid>
            <Grid item xl="4" md="4" xs="12">
              <Box
                className="blueback"
                sx={{
                  border: "0.5px solid #e6e6e6",
                  padding: "30px 50px",
                  textAlign: "center",
                }}
              >
                <Typography fontSize="40px" fontWeight="700" color="#fff">
                  <CountUp end={306} />
                </Typography>
                <Typography fontSize="16px" fontWeight="700" color="#fff">
                  SALESFORCE
                </Typography>
              </Box>
            </Grid>
            <Grid item xl="4" md="4" xs="12">
              <Box
                className="blueback"
                sx={{
                  border: "0.5px solid #e6e6e6",
                  padding: "30px 50px",
                  textAlign: "center",
                }}
              >
                <Typography fontSize="40px" fontWeight="700" color="#fff">
                  <CountUp end={103} />
                </Typography>
                <Typography fontSize="16px" fontWeight="700" color="#fff">
                  LOCATIONS
                </Typography>
              </Box>
            </Grid>
            <Grid item xl="4" md="4" xs="12">
              <Box
                className="blueback"
                sx={{
                  border: "0.5px solid #e6e6e6",
                  padding: "30px 50px",
                  textAlign: "center",
                }}
              >
                <Typography fontSize="40px" fontWeight="700" color="#fff">
                  <CountUp end={508} />
                </Typography>
                <Typography fontSize="16px" fontWeight="700" color="#fff">
                  DISTRIBUTORS
                </Typography>
              </Box>
            </Grid>
            <Grid item xl="4" md="4" xs="12">
              <Box
                className="blueback"
                sx={{
                  border: "0.5px solid #e6e6e6",
                  padding: "30px 50px",
                  textAlign: "center",
                }}
              >
                <Typography fontSize="40px" fontWeight="700" color="#fff">
                  <CountUp end={1000} />+
                </Typography>
                <Typography fontSize="16px" fontWeight="700" color="#fff">
                  OUTLETS
                </Typography>
              </Box>
            </Grid>
            <Grid item xl="4" md="4" xs="12">
              <Box
                className="blueback"
                sx={{
                  border: "0.5px solid #e6e6e6",
                  padding: "30px 50px",
                  textAlign: "center",
                }}
              >
                <Typography fontSize="40px" fontWeight="700" color="#fff">
                  <CountUp end={127969} />+
                </Typography>
                <Typography fontSize="16px" fontWeight="700" color="#fff">
                  CONSUMERS
                </Typography>
              </Box>
            </Grid>
          </Grid> */}
        </Container>
        <br />
      </Box>
    </>
  );
};

export default ProductSlider;
