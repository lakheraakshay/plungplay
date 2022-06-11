import React from "react";
import { Container, Box, Divider } from "@mui/material/";
import Typography from "@mui/material/Typography";
import { useStyles } from "./Style";
import { Link } from "react-router-dom";

const Products = () => {
  const classes = useStyles();

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
            justifyContent: { md: "space-between", xs: "center" },
          }}
        >
          <Link to="/details">
            <img
              src={require("../../assets/home/prodprod (1).png")}
              alt=""
              className={classes.productsImg}
            />
          </Link>
          <Link to="/details">
            <img
              src={require("../../assets/home/prodprod (4).png")}
              alt=""
              className={classes.productsImg}
            />
          </Link>
          <Link to="/details">
            <img
              src={require("../../assets/home/prodprod (3).png")}
              alt=""
              className={classes.productsImg}
            />
          </Link>
          <Link to="/details">
            <img
              src={require("../../assets/home/prodprod (2).png")}
              alt=""
              className={classes.productsImg}
            />
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Products;
