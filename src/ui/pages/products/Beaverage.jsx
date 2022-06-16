import React from "react";
import { Container, Box, Divider, TextField, Button } from "@mui/material/";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useStyles } from "./Style";

const Beaverage = () => {
  const [active, setActive] = React.useState();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [cockmock, setCockmock] = React.useState([
    "80",
    "80",
    "80",
    "80",
    "99",
    "99",
    "99",
    "99",
    "99",
    "99",
  ]);
  const [coffee, setCoffee] = React.useState(["50", "50", "50", "50"]);
  const [mojito, setMojito] = React.useState(["30", "30", "30", "30", "30", "30"]);
  const [juice, setJuice] = React.useState(["450", "99"]);
  const [icedTea, setIcedTea] = React.useState(["160", "99", "99"]);
  const [kombucha, setKombucha] = React.useState(["160", "160", "160", "160", "160", "160", "160", "160"]);
  const [probiotic, setProbiotic] = React.useState(["99", "99", "99", "99"]);
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
          Categories - Beverages
        </Typography>
        <br />
        <Divider />
        <br />
        <br />

        <Typography fontSize="24px" fontWeight="500" color="initial">
          Cocktail & Mocktail
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
          {cockmock.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/cockmock1 (${i + 1}).png`)}
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
        <br />
        <br />
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Cold Coffee
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
          {coffee.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/coldcofee (${i + 1}).jpg`)}
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
        <br />
        <br />
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Mojitos
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
          {mojito.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/mojito ${i + 1}.jpeg`)}
                  alt=""
                  height="260px"
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
        <br />
        <br />
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Juice
        </Typography>
        <br />
        <Divider /> <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "start", sm: "center" },
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {juice.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/juice (${i + 1}).jpg`)}
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
        <br />
        <br />
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Insta Green Tea
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
          {/* {new Array(8).fill().map(() => (
            <> */}
          <Box sx={{ width: "260px" }}>
            <img
              src={require("../../assets/home/Insta-Green-Tea-White_OPEN1.jpg")}
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
              MRP: 500/-
            </Typography>
          </Box>
          {/* </>
          ))} */}
        </Box>
        <br />
        <br />
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Iced Tea
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
          {icedTea.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/icetea${i + 1}.png`)}
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
        <br />
        <br />
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Kombucha
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
          {kombucha.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/kombucha${i + 1}.png`)}
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
        <br />
        <br />
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Probiotic Drink
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
          {probiotic.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/probiotic${i + 1}.png`)}
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
        <br/>
        <br/>
        <Box
          onMouseOver={() => setActive(1)}
          onMouseOut={() => setActive(null)}
          sx={{ width: { md: "260px", xs: "100%" } }}
        >
          <img
            src={require("../../assets/home/probiotic1.png")}
            alt=""
            className={classes.productsImgCat}
          />
          <Box
            display={active == "1" ? "block" : "none"}
            className={classes.hoeverContainer}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: { md: "space-between", xs: "center" },
              }}
            >
              <Typography
                fontSize="15px"
                fontWeight="500"
                sx={{ border: "1px solid #000000", padding: "15px" }}
              >
                10 ml
              </Typography>
              <Typography
                fontSize="15px"
                fontWeight="500"
                sx={{ border: "1px solid #000000", padding: "15px" }}
              >
                20 ml
              </Typography>
            </Box>
          </Box>
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

export default Beaverage;
