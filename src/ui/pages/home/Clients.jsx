import React from "react";
import { Container, Box } from "@mui/material/";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";

const Clients = () => {
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
      <Container fixed sx={{ margin: { md: "100px auto" } }}>
        <br />
        <Box sx={{ textAlign: "center" }}>
          <Typography
            fontSize="32px"
            fontWeight="700"
            color="initial"
            textAlign="center"
          >
            Our Clients
          </Typography>
          <img src={require("../../assets/commons/line.png")} alt="" />
        </Box>
        <br />
        <br />
        <Slider {...settings}>
          <Box >
            <img src={require("../../assets/home/brands (1).png")} alt="" width={'200px'}
              style={{ display: 'block', margin: '0 auto' }}
            />
          </Box>
          <Box >
            <img src={require("../../assets/home/brands (2).png")} alt="" width={'200px'}
              style={{ display: 'block', margin: '0 auto' }}
            />
          </Box>
          <Box >
            <img src={require("../../assets/home/brands (3).png")} alt="" width={'200px'}
              style={{ display: 'block', margin: '0 auto' }}
            />
          </Box>
          <Box >
            <img src={require("../../assets/home/cravova.jpg")} alt="" width={'200px'} height={'150px'}
              style={{ display: 'block', margin: '0 auto' }}
            />
          </Box>
          <Box >
            <img src={require("../../assets/home/naturup.webp")} alt="" width={'200px'}
              style={{ display: 'block', margin: '0 auto' }}
            />
          </Box>
          <Box >
            <img src={require("../../assets/home/brand6.jpeg")} alt="" width={'200px'}
              style={{ display: 'block', margin: '0 auto' }}
            />
          </Box>
          <Box >
            <img src={require("../../assets/home/alphavedic.webp")} alt="" width={'200px'} />
          </Box>
          <Box >
            <img src={require("../../assets/home/stirred.webp")} alt="" width={'200px'} />
          </Box>
          <Box >
            <img src={require("../../assets/home/brand9.jpeg")} alt="" width={'200px'} height={'100px'} />
          </Box>
        </Slider>
      </Container>
    </>
  );
};

export default Clients;
