import React from "react";
import {
  Container,
  Box,
  Divider,
  TextField,
  Button,
  Grid,
} from "@mui/material/";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useStyles } from "./Style";

const PersonalCare = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [coffee, setCoffee] = React.useState(["50", "50", "50", "50"]);
  const [lipScrub, setLipScrub] = React.useState(["398", "448", "398", "445"]);
  const [bodyWash, setbodyWash] = React.useState(["495", "495", "495"]);
  const [coconutOil, setcoconutOil] = React.useState(["449", "599"]);
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
          Categories - Personal Care
        </Typography>
        <br />
        <Divider />
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
            <Typography fontSize="24px" fontWeight="500" color="initial">
              Shampoo
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
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/shampoo 1.png`)}
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
                  MRP: 595/-
                </Typography>
              </Box>
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
            <Typography fontSize="24px" fontWeight="500" color="initial">
              Coconut Oil
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
              {coconutOil.map((item, i) => (
                <>
                  <Box sx={{ width: "260px" }}>
                    <img
                      src={require(`../../assets/home/coconutoil ${i + 1}.png`)}
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
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Lip Scrub , Balm
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
          {lipScrub.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/lipscrub${i + 1}.png`)}
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
          Body Wash
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
          {bodyWash.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/bodywash ${i + 1}.png`)}
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
        {/* <Typography fontSize="24px" fontWeight="500" color="initial">
          Coconut Oil
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
          {coconutOil.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/coconutoil ${i + 1}.png`)}
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
        <br /> */}
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
            sx={{
              paddingLeft: { md: "50px", xs: "10px" },
              paddingRight: { md: "50px", xs: "10px" },
              paddingTop: { md: "50px", xs: "10px" },
              paddingBottom: { md: "0", xs: "10px" },
            }}
          >
            <Typography fontSize="24px" fontWeight="500" color="initial">
              Rose Water
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
              <Box sx={{ width: "260px" }}>
                <img
                  src={require("../../assets/home/rosewater.png")}
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
                  MRP: 109/-
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xl="3"
            md="3"
            xs="12"
            sx={{
              paddingLeft: { md: "50px", xs: "10px" },
              paddingRight: { md: "50px", xs: "10px" },
              paddingTop: { md: "50px", xs: "10px" },
              paddingBottom: { md: "0", xs: "10px" },
            }}
          >
            <Typography fontSize="24px" fontWeight="500" color="initial">
              Scrub Cream
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
              <Box sx={{ width: "260px" }}>
                <img
                  src={require("../../assets/home/scrubcream.png")}
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
                  MRP: 299/-
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xl="3"
            md="3"
            xs="12"
            sx={{
              paddingLeft: { md: "50px", xs: "10px" },
              paddingRight: { md: "50px", xs: "10px" },
              paddingTop: { md: "50px", xs: "10px" },
              paddingBottom: { md: "0", xs: "10px" },
            }}
          >
            <Typography fontSize="24px" fontWeight="500" color="initial">
              Mud Pack
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
              <Box sx={{ width: "260px" }}>
                <img
                  src={require("../../assets/home/mudpack.jpeg")}
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
                  MRP: 289/-
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xl="3"
            md="3"
            xs="12"
            sx={{
              paddingLeft: { md: "50px", xs: "10px" },
              paddingRight: { md: "50px", xs: "10px" },
              paddingTop: { md: "50px", xs: "10px" },
              paddingBottom: { md: "0", xs: "10px" },
            }}
          >
            <Typography fontSize="24px" fontWeight="500" color="initial">
              Sunscreen
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
              <Box sx={{ width: "260px" }}>
                <img
                  src={require("../../assets/home/sunscream.png")}
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
                  MRP: 445/-
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <br />
        <br />
        {/* <Typography fontSize="24px" fontWeight="500" color="initial">
          Scrub Cream
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
          <Box sx={{ width: "260px" }}>
            <img
              src={require("../../assets/home/scrubcream.png")}
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
              MRP: 299/-
            </Typography>
          </Box>
        </Box>
        <br />
        <br />
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Mud Pack
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
          <Box sx={{ width: "260px" }}>
            <img
              src={require("../../assets/home/mudpack.jpeg")}
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
              MRP: 289/-
            </Typography>
          </Box>
        </Box>
        <br />
        <br />
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Sunscreen
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
          <Box sx={{ width: "260px" }}>
            <img
              src={require("../../assets/home/sunscream.png")}
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
              MRP: 445/-
            </Typography>
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

export default PersonalCare;
