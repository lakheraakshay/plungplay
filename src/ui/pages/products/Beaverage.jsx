import React from "react";
import {
  Container,
  Box,
  Divider,
  TextField,
  Button,
  Grid,
  Alert,
} from "@mui/material/";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import emailjs from "@emailjs/browser";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import { useStyles } from "./Style";
import { Link } from "react-router-dom";

const initialForm = { name: "", email: "", contact: "", message: "" };
const Beaverage = () => {
  const [active, setActive] = React.useState();
  const [formData, setFormData] = React.useState(initialForm);
  const [openToast, setOpenToast] = React.useState({ open: false, msg: "" });
  const [loader, setLoader] = React.useState(false);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [cockmock, setCockmock] = React.useState([
    "80",
    "80",
    "80",
    "80",
    "50",
    "50",
    "60",
    "50",
    "60",
    "60",
  ]);
  const [coffee, setCoffee] = React.useState(["50", "50", "50", "50"]);
  const [mojito, setMojito] = React.useState([
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
  ]);
  const [juice, setJuice] = React.useState(["15", "99"]);
  const [icedTea, setIcedTea] = React.useState(["99", "99", "99", "99"]);
  const [kombucha, setKombucha] = React.useState([
    "160",
    "160",
    "160",
    "160",
    "160",
    "160",
    "160",
    "160",
  ]);
  const [probiotic, setProbiotic] = React.useState(["99", "99", "99", "99"]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    const { name, message, contact, email } = formData;
    if (
      name.trim() == "" ||
      message.trim() == "" ||
      email.trim() == "" ||
      contact.trim() == ""
    ) {
      setOpenToast({
        open: true,
        msg: "All fields are required",
        severity: "error",
      });
      return null;
    }

    setLoader(true);
    try {
      // ---- Login to EmailJs, create Service ID and template id.

      emailjs
        .sendForm(
          "service_f00ztqu", // service id
          "template_s3pyodh", //--- tamplate id
          e.target, // form
          "user_zNFjvuObs4IGmjnw38Wrf" // user id
        )
        .then(
          (result) => {
            console.log(result, "result");
            setLoader(false);
            setOpenToast({
              open: true,
              msg: "We will contact you soon.",
              severity: "success",
            });
          },
          (error) => {
            console.log(error.text);
            setOpenToast({
              open: true,
              msg: "Error while sending mail",
              severity: "error",
            });
          }
        );
    } catch (e) {
      console.log(e);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width:{md:'400',xs:'300px'},
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
      <Snackbar
        open={openToast.open}
        autoHideDuration={3000}
        onClose={() => setOpenToast({ open: false })}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        // action={action}
        severity={openToast.severity}
      >
        <Alert
          onClose={() => setOpenToast({ open: false })}
          severity={openToast.severity}
          sx={{ width: "100%" }}
        >
          {openToast.msg}
        </Alert>
      </Snackbar>
      <div>
        <img
          src={require("../../assets/home/prodbg.png")}
          alt=""
          style={{ width: "100%" }}
          className="banner-image"
        />
      </div>
      <Container fixed sx={{ margin: { md: "50px auto" } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontSize="32px" fontWeight="700" color="initial">
            Categories - Beverages
          </Typography>
          <Link to="/products">
            <Button
              variant="text"
              sx={{ color: "#000", textDecoration: "underline", border: "0.5px solid" }}
            >
              Back
            </Button>
          </Link>
        </Box>
        <br />
        <Divider />
        <br />
        <br />
        <Typography sx={{ fontSize: { md: '24px', xs: '20px' } }} fontWeight="500" color="initial">
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
              <Box sx={{ width: { md: "260px", xs: "100%" }, textAlign: { md: 'left', xs: 'center' } }}>
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
        <Typography sx={{ fontSize: { md: '24px', xs: '20px' } }} fontWeight="500" color="initial">
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
              <Box sx={{ width: { md: "260px", xs: "100%" }, textAlign: { md: 'left', xs: 'center' } }}>
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
        <Typography sx={{ fontSize: { md: '24px', xs: '20px' } }} fontWeight="500" color="initial">
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
              <Box sx={{ width: { md: "260px", xs: "100%" }, textAlign: { md: 'left', xs: 'center' } }}>
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
        {/* <Typography   sx={{fontSize:{md:'24px',xs:'20px'}}} fontWeight="500" color="initial">
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
              <Box sx={{ width: {md:"260px",xs:"100%"},textAlign:{md:'left',xs:'center'}  }}>
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
        </Box> */}
        <br />
        <br />
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
            xl="3"
            md="3"
            xs="12"
          // sx={{
          //   paddingLeft: { md: "50px", xs: "10px" },
          //   paddingRight: { md: "50px", xs: "10px" },
          //   paddingTop: { md: "50px", xs: "10px" },
          //   paddingBottom: { md: "0", xs: "10px" },
          // }}
          >
            <Typography sx={{ fontSize: { md: '24px', xs: '20px' } }} fontWeight="500" color="initial">
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
              <Box sx={{ width: { md: "260px", xs: "100%" }, textAlign: { md: 'left', xs: 'center' } }}>
                <img
                  src={require("../../assets/home/Insta-Green-Tea-White_OPEN1.jpg")}
                  alt=""
                  height={"260px"}
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
          </Grid>
          <Grid
            item
            xl="9"
            md="9"
            xs="12"
            sx={{
              paddingLeft: { md: "50px", xs: "10px" },
              paddingRight: { md: "50px", xs: "10px" },
              // paddingTop: { md: "50px", xs: "10px" },
              // paddingBottom: { md: "0", xs: "10px" },
            }}
          >
            <Typography sx={{ fontSize: { md: '24px', xs: '20px' } }} fontWeight="500" color="initial">
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
                  <Box sx={{ width: { md: "260px", xs: "100%" }, textAlign: { md: 'left', xs: 'center' } }}>
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
          </Grid>
        </Grid>
        <br />
        <br />
        <Typography sx={{ fontSize: { md: '24px', xs: '20px' } }} fontWeight="500" color="initial">
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
              <Box sx={{ width: { md: "260px", xs: "100%" }, textAlign: { md: 'left', xs: 'center' } }}>
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
        <Typography sx={{ fontSize: { md: '24px', xs: '20px' } }} fontWeight="500" color="initial">
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
              <Box sx={{ width: { md: "260px", xs: "100%" }, textAlign: { md: 'left', xs: 'center' } }}>
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
        <Typography sx={{ fontSize: { md: '24px', xs: '20px' } }} fontWeight="500" color="initial">
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
              <Box sx={{ width: { md: "260px", xs: "100%" }, textAlign: { md: 'left', xs: 'center' } }}>
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
        {/* <br/>
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
        </Box> */}
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
          <form onSubmit={onSubmit}>
            <Typography gutterBottom fontSize="15px" color="initial">
              Name
            </Typography>
            <TextField
              id=""
              label=""
              placeholder="Enter your name"
              name="name"
              onChange={(e) => handleChange(e)}
              variant="outlined"
              sx={{
                width: "100%",
                background: "#fff",
                borderRadius: "6px",
              }}
            />
            <div style={{ height: 15 }} />
            <Typography gutterBottom fontSize="15px" color="initial">
              Email
            </Typography>
            <TextField
              id=""
              label=""
              placeholder="Enter your email"
              name="email"
              onChange={(e) => handleChange(e)}
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
              name="contact"
              onChange={(e) => handleChange(e)}
              variant="outlined"
              sx={{
                width: "100%",
                background: "#fff",
                borderRadius: "6px",
              }}
            />
            <div style={{ height: 15 }} />
            <Typography gutterBottom fontSize="15px" color="initial">
              Nature of Business
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              name="message"
              onChange={(e) => handleChange(e)}
              id="demo-simple-select"
            >
              <MenuItem selected value={"Manufacturer"}>
                Manufacturer
              </MenuItem>
              <MenuItem value={"Distributor"}>Distributor</MenuItem>
            </Select>

            <div style={{ height: 32 }} />

            <Box sx={{ textAlign: "center" }}>
              {!loader && (
                <Button
                  size="large"
                  // onClick={onSubmit}
                  type="submit"
                  variant="contained"
                  sx={{
                    background: "#13104B",
                    "&:hover": { background: "#13104B" },
                  }}
                >
                  Submit
                </Button>
              )}
              {loader && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
                    <CircularProgress color="secondary" />
                  </Stack>
                </div>
              )}
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Beaverage;
