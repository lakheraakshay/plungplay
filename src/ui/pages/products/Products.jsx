import React from "react";
import { Container, Box, Divider } from "@mui/material/";
import Typography from "@mui/material/Typography";
import { useStyles } from "./Style";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Products = () => {
  const classes = useStyles();

  const [active, setActive] = React.useState();
  
  const beverages = [
    "Coctail & Mocktail",
    "Juice",
    "Iced Green Tea",
    "Cold Coffee",
    "Iced Tea",
    "Mojitos",
    "Insta Green Tea",
  ]
  const food = [
    "Pasta",
    "Jams",
    "Sauces ",
    "Olive Oil",
    "Healthy Snacking",
    "Apple Ciders",
    "Cheese",
  ]

  const personalCare = [
    "Body Wash",
    "Shampoo",
    "Lotion",
    "Oil",
    "Serum",
  ]

  const mouthFreshner = [
    "After Smoke",
    "Emmunity",
    "Energy Fresh",
    "Insta Tea",
    "Iced Tea",
  ]

  return (
    <>
      <div>
        <img
          src={require("../../assets/home/productheader.png")}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <Container fixed sx={{ margin: { md: "50px auto" } }}>
        <Typography fontSize="32px" fontWeight="700" color="initial">
          Categories
        </Typography>
        <br />
        <Divider />
        <br />
        <br />
        <Box
          sx={{
            display: "flex",
            gap: "50px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Box
            onMouseOver={() => setActive(1)}
            onMouseOut={() => setActive(null)}
            sx={{ width: { md: "573.46px", xs: "100%" } }}
          >
            <img
              src={require("../../assets/home/prodprod (1).png")}
              alt=""
              className={classes.productsImgCat}
            />
            <Box
              display={active == "1" ? "block" : "none"}
              className={classes.hoeverContainer}
            >
              <Box display="flex" justifyContent="space-between">
                <Button
                  size="large"
                  variant="text"
                  sx={{ textDecoration: "underline", color: "#000" }}
                >
                  Beverages
                </Button>
                <Link to="/products/beverage">
                  <IconButton aria-label="">
                    <ArrowRightAltIcon />
                  </IconButton>
                </Link>
              </Box>
              <br />
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: { md: "space-between", xs: "center" },
                }}
              >
                {beverages.map((data) => (
                  <>
                    <Typography
                      fontSize="20px"
                      width="40%"
                      fontWeight="500"
                      sx={{ border: "1px solid #000000", padding: "15px" }}
                    >
                      {data}
                    </Typography>
                  </>
                ))}
              </Box>
            </Box>
          </Box>
          {/* //////////////////// */}
          <Box
            onMouseOver={() => setActive(2)}
            onMouseOut={() => setActive(null)}
            sx={{ width: { md: "573.46px", xs: "100%" } }}
          >
            <img
              src={require("../../assets/home/prodprod (4).png")}
              alt=""
              className={classes.productsImgCat}
            />
            <Box
              display={active == "2" ? "block" : "none"}
              className={classes.hoeverContainer}
            >
              <Box display="flex" justifyContent="space-between">
                <Button
                  size="large"
                  variant="text"
                  sx={{ textDecoration: "underline", color: "#000" }}
                >
                  Food
                </Button>
                <Link to="/products/food">
                  <IconButton aria-label="">
                    <ArrowRightAltIcon />
                  </IconButton>
                </Link>
              </Box>
              <br />
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: { md: "space-between", xs: "center" },
                }}
              >
                {food.map((data) => (
                  <>
                    <Typography
                      fontSize="20px"
                      width="40%"
                      fontWeight="500"
                      sx={{ border: "1px solid #000000", padding: "15px" }}
                    >
                      {data}
                    </Typography>
                  </>
                ))}
              </Box>
            </Box>
          </Box>
          {/* //////////////////// */}
          <Box
            onMouseOver={() => setActive(3)}
            onMouseOut={() => setActive(null)}
            sx={{ width: { md: "573.46px", xs: "100%" } }}
          >
            <img
              src={require("../../assets/home/prodprod (3).png")}
              alt=""
              className={classes.productsImgCat}
            />
            <Box
              display={active == "3" ? "block" : "none"}
              className={classes.hoeverContainer}
            >
              <Box display="flex" justifyContent="space-between">
                <Button
                  size="large"
                  variant="text"
                  sx={{ textDecoration: "underline", color: "#000" }}
                >
                  Mouth Freshner
                </Button>
                <Link to="/products/mouth-freshner">
                  <IconButton aria-label="">
                    <ArrowRightAltIcon />
                  </IconButton>
                </Link>
              </Box>
              <br />
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: { md: "space-between", xs: "center" },
                }}
              >
                {mouthFreshner.map((data) => (
                  <>
                    <Typography
                      fontSize="20px"
                      width="40%"
                      fontWeight="500"
                      sx={{ border: "1px solid #000000", padding: "15px" }}
                    >
                      {data}
                    </Typography>
                  </>
                ))}
              </Box>
            </Box>
          </Box>
          {/* //////////////////// */}
          <Box
            onMouseOver={() => setActive(4)}
            onMouseOut={() => setActive(null)}
            sx={{ width: { md: "573.46px", xs: "100%" } }}
          >
            <img
              src={require("../../assets/home/prodprod (2).png")}
              alt=""
              className={classes.productsImgCat}
            />
            <Box
              display={active == "4" ? "block" : "none"}
              className={classes.hoeverContainer}
            >
              <Box display="flex" justifyContent="space-between">
                <Button
                  size="large"
                  variant="text"
                  sx={{ textDecoration: "underline", color: "#000" }}
                >
                  Personal Care
                </Button>
                <Link to="/products/personal-care">
                  <IconButton aria-label="">
                    <ArrowRightAltIcon />
                  </IconButton>
                </Link>
              </Box>
              <br />
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: { md: "space-between", xs: "center" },
                }}
              >
                {personalCare.map((data) => (
                  <>
                    <Typography
                      fontSize="20px"
                      width="40%"
                      fontWeight="500"
                      sx={{ border: "1px solid #000000", padding: "15px" }}
                    >
                      {data}
                    </Typography>
                  </>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Products;
