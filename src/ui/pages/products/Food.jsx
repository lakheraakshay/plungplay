import React from "react";
import { Container, Box, Divider, TextField, Button } from "@mui/material/";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useStyles } from "./Style";

const Food = () => {
  const classes = useStyles();
  const [active, setActive] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [pasta, setPasta] = React.useState([
    {
      price: "25",
    },
    {
      price: "25",
    },
    {
      price: "25",
    },
    {
      price: "149",
    },
    {
      price: "149",
    },
    {
      price: "169",
    },
    {
      gram: "500",
      // gram: "5",
      price: "149",
      // price: "999",
    },
    {
      price: "69",
    },
    {
      price: "149",
    },
    {
      gram: "500",
      // gram: "5",
      price: "149",
      // price: "999",
    },
    {
      price: "159",
    },
    {
      price: "159",
    },
    {
      price: "169",
    },
    {
      price: "20",
    },
    {
      price: "149",
    },
    {
      gram: "500",
      // gram: "5",
      price: "149",
      // price: "999",
    },
    {
      price: "169",
    },
    {
      price: "169",
    },
    {
      price: "169",
    },
    {
      price: "79",
    },
    {
      price: "79",
    },
    {
      price: "159",
    },
    {
      price: "159",
    },
    {
      price: "159",
    },
    {
      gram: "500",
      // gram: "200",
      // gram: "5",
      price: "149",
      // price: "69",
      // price: "999",
    },
  ]);
  const [sauces, setSauces] = React.useState([
    "89",
    "89",
    "1",
    "139",
    "1",
    "139",
  ]);
  const [jam, setJam] = React.useState([
    "199",
    "199",
    "199",
    "199",
    "199",
    "199",
    "199",
    "199",
  ]);
  const [healthySnack, sethealthySnack] = React.useState([
    {
      gram: "50",
      gram: "100",
      price: "40",
      price: "80",
    },
    {
      gram: "50",
      gram: "100",
      price: "40",
      price: "80",
    },
    {
      gram: "50",
      gram: "100",
      price: "40",
      price: "80",
    },
    {
      gram: "50",
      gram: "100",
      price: "40",
      price: "80",
    },
    {
      gram: "50",
      gram: "100",
      price: "40",
      price: "80",
    },
    {
      gram: "40",
      gram: "65",
      price: "99",
      price: "149",
    },
    {
      gram: "40",
      gram: "65",
      price: "99",
      price: "149",
    },
    {
      gram: "40",
      gram: "65",
      price: "99",
      price: "149",
    },
    {
      gram: "40",
      gram: "65",
      price: "99",
      price: "149",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
    {
      price: "70",
    },
  ]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    background:
      "linear-gradient(115.91deg, rgba(192, 192, 192, 0.16) 0%, rgba(229, 229, 229, 0.06) 100%)",
    backdropFilter: "blur(50px)",
    border: "1px solid #070707",
    boxShadow: 14,
    p: 4,
    borderRadius: 4,
  };

  return (
    <>
      <div>
        <img
          src={require("../../assets/home/prodbg.png")}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <Container fixed sx={{ margin: { md: "50px auto" } }}>
        <Typography fontSize="32px" fontWeight="700" color="initial">
          Categories - Food
        </Typography>
        <br />
        <Divider />
        <br />
        <br />
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Pasta
        </Typography>
        <br />
        <Divider /> <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "start", sm: "center" },
            gap: "125px",
            flexWrap: "wrap",
          }}
        >
          {pasta.map((item, i) => (
            <>
              <Box
                sx={{ width: "210px" }}
                // onMouseOver={() => setActive(i + 1)}
                // onMouseOut={() => setActive(null)}
              >
                <img
                  src={require(`../../assets/home/pasta ${i + 1}.png`)}
                  alt=""
                  height="270px"
                  className={classes.productsImg}
                  onClick={handleOpen}
                />
                {/* <br />
                <Typography
                  mt="10px"
                  textAlign="center"
                  fontSize="20px"
                  fontWeight="500"
                  color="initial"
                >
                  MRP: {item}/-
                </Typography> */}
                {item.gram ? (
                  <Box
                    // display={active == `${i + 1}` ? "block" : "none"}
                    className={classes.hoeverContainer}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        justifyContent: { md: "space-between", xs: "center" },
                      }}
                    >
                      <Typography
                        fontSize="15px"
                        fontWeight="500"
                        sx={{ border: "1px solid #000000", padding: "10px" }}
                      >
                        {item.gram} gram
                      </Typography>
                      <Typography
                        fontSize="15px"
                        fontWeight="500"
                        sx={{ border: "1px solid #000000", padding: "10px" }}
                      >
                        Rs {item.price}/-
                      </Typography>
                    </Box>
                  </Box>
                ) : (
                  <Box className={classes.hoeverContainer}>
                    <Typography
                      // mt="10px"
                      textAlign="center"
                      fontSize="18px"
                      fontWeight="500"
                      color="initial"
                    >
                      MRP: {item.price}/-
                    </Typography>
                  </Box>
                )}
              </Box>
            </>
          ))}
        </Box>
        <br />
        <br />
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Healthy Snacks
        </Typography>
        <br />
        <Divider /> <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "start", sm: "center" },
            gap: "90px",
            flexWrap: "wrap",
          }}
        >
          {healthySnack.map((item, i) => (
            <>
              <Box sx={{ width: "240px" }}>
                <img
                  src={require(`../../assets/home/healthysnack (${i + 1}).png`)}
                  alt=""
                  height={i <= 7 ? "320" : "auto"}
                  className={classes.productsImg}
                  onClick={handleOpen}
                />
                {/* <br />
                <Typography
                  mt="10px"
                  textAlign="center"
                  fontSize="20px"
                  fontWeight="500"
                  color="initial"
                >
                  MRP: {item}/-
                </Typography> */}
                {item.gram ? (
                  <Box className={classes.hoeverContainer}>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        justifyContent: { md: "space-between", xs: "center" },
                      }}
                    >
                      <Typography
                        fontSize="15px"
                        fontWeight="500"
                        sx={{ border: "1px solid #000000", padding: "10px" }}
                      >
                        {item.gram} gram
                      </Typography>
                      <Typography
                        fontSize="15px"
                        fontWeight="500"
                        sx={{ border: "1px solid #000000", padding: "10px" }}
                      >
                        Rs {item.price}/-
                      </Typography>
                    </Box>
                  </Box>
                ) : (
                  <Box className={classes.hoeverContainer}>
                    <Typography
                      // mt="10px"
                      textAlign="center"
                      fontSize="18px"
                      fontWeight="500"
                      color="initial"
                    >
                      MRP: {item.price}/-
                    </Typography>
                  </Box>
                )}
              </Box>
            </>
          ))}
        </Box>
        <br />
        <br />
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Sauces
        </Typography>
        <br />
        <Divider /> <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "start", sm: "center" },
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          {sauces.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/sauce${i + 1}.jpg`)}
                  alt=""
                  height={i <= 3 ? "380px" : "380px"}
                  className={classes.productsImg}
                  onClick={handleOpen}
                />
                <br />
                <Typography
                  mt="10px"
                  textAlign="center"
                  fontSize="20px"
                  fontWeight="500"
                  color="initial"
                >
                  MRP: {item}/-
                </Typography>
              </Box>
            </>
          ))}
        </Box>
        {/* <br />
        <br />
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Evolve
        </Typography>
        <br />
        <Divider /> <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "start", sm: "center" },
            gap: "45px",
            flexWrap: "wrap",
          }}
        >
          {evolve.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/evolve ${i + 1}.png`)}
                  alt=""
                  className={classes.productsImg}
                  onClick={handleOpen}
                />
                <br />
                <Typography
                  mt="10px"
                  textAlign="center"
                  fontSize="20px"
                  fontWeight="500"
                  color="initial"
                >
                  MRP: {item}/-
                </Typography>
              </Box>
            </>
          ))}
        </Box> */}
        <br />
        <br />
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Fruit Spreads
        </Typography>
        <br />
        <Divider /> <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "space-between", sm: "center" },
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {jam.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/jam ${i + 1}.png`)}
                  alt=""
                  className={classes.productsImg}
                  onClick={handleOpen}
                />
                <br />
                <Typography
                  mt="10px"
                  textAlign="center"
                  fontSize="20px"
                  fontWeight="500"
                  color="initial"
                >
                  MRP: {item}/-
                </Typography>
              </Box>
            </>
          ))}
        </Box>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            // color={"#fff"}
            textAlign="center"
          >
            Book an Enquiry
          </Typography>
          <br />
          <Typography gutterBottom fontSize="15px" color="initial">
            Email Id
          </Typography>
          <TextField
            id=""
            label=""
            placeholder="Enter your email"
            variant="outlined"
            sx={{
              width: "100%",
              background: "#fff",
              borderRadius: "6px",
            }}
          />
          <div style={{ height: 15 }} />
          <Typography gutterBottom fontSize="15px" color="initial">
            Contact Number
          </Typography>
          <TextField
            id=""
            label=""
            placeholder="Enter your contact number"
            variant="outlined"
            sx={{
              width: "100%",
              background: "#fff",
              borderRadius: "6px",
            }}
          />
          <div style={{ height: 15 }} />
          <Typography gutterBottom fontSize="15px" color="initial">
            Product
          </Typography>
          <TextField
            id=""
            label=""
            placeholder="Enter product name"
            variant="outlined"
            sx={{
              width: "100%",
              background: "#fff",
              borderRadius: "6px",
            }}
          />
          <div style={{ height: 32 }} />

          <Box sx={{ textAlign: "center" }}>
            <Button
              size="large"
              variant="contained"
              sx={{
                background: "#13104B",
                "&:hover": { background: "#13104B" },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Food;
