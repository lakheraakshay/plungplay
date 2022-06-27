import React, { useState } from "react";
import { Container, Box, Grid, Alert } from "@mui/material/";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";

const initialForm = { name: "", email: "", contact: "", message: "" };
const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [openToast, setOpenToast] = useState({ open: false, msg: "" });
  const [loader, setLoader] = useState(false);

  const sendMail = () => {};
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
            console.log(result);
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

  return (
    <>
      <div>
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
        <img
          src={require("../../assets/home/contactusheader.png")}
          alt=""
          className="banner-image"
          style={{ width: "100%" }}
        />
      </div>
      <Container fixed sx={{ margin: { md: "50px auto" } }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
        flexWrap="wrap-reverse"
          sx={{ marginTop: "-8px" }}
        >
          <Grid item xl="5" md="5" xs="12">
            <br />
            <a
              target="_blank"
              style={{textDecoration: "none"}}
              href="https://www.google.com/maps/place/Stalwart+World/@19.1834447,72.8326363,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7b72aaef89507:0x3d602802565715f9!8m2!3d19.1834447!4d72.8326363"
            >
              <Box sx={{ display: "flex", alignItems:{md: "center",xs:'flex-start'}, gap: "20px" }}>
                <img src={require("../../assets/home/address.png")} alt="" />
                <Typography gutterBottom fontSize="16px" color="initial">
                  143-147, 1st Floor, IJMIMA building, Mindspace Opposite
                  Interface Building, behind Goregaon Sports Complex, Malad
                  West, Mumbai, Maharashtra - 400064
                </Typography>
              </Box>
            </a>
            <br />
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img src={require("../../assets/home/contact (2).png")} alt="" />
              <Typography gutterBottom fontSize="16px" color="initial">
                divya@stalwartworld.com
              </Typography>
            </Box>
            <br />
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img src={require("../../assets/home/contact (2).png")} alt="" />
              <Typography gutterBottom fontSize="16px" color="initial">
                rajasi@stalwartworld.com
              </Typography>
            </Box>
            <br />
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img src={require("../../assets/home/contact (1).png")} alt="" />
              <Typography gutterBottom fontSize="16px" color="initial">
                +91-98198 60110
              </Typography>
            </Box>
            <br />
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img src={require("../../assets/home/contact (1).png")} alt="" />
              <Typography gutterBottom fontSize="16px" color="initial">
                +91-97665 64158
              </Typography>
            </Box>
            <br/>
          </Grid>
          <Grid item xl="6" md="6" xs="12">
            <Box
              sx={{
                background: "#F6F6F6",
                padding: "30px",
                borderRadius: "16px",
              }}
            >
              <Typography fontSize="40px" fontWeight="700" color="initial">
                Get In Touch
              </Typography>
              <br />
              <form onSubmit={onSubmit}>
                <div>
                  <Typography gutterBottom fontSize="16px" color="initial">
                    Name
                  </Typography>
                  <TextField
                    id=""
                    placeholder="Enter your name"
                    name="name"
                    onChange={(e) => handleChange(e)}
                    label=""
                    variant="outlined"
                    sx={{
                      width: "100%",
                      background: "#fff",
                      borderRadius: "6px",
                    }}
                  />
                </div>
                <br />
                <div>
                  <Typography gutterBottom fontSize="16px" color="initial">
                    Email
                  </Typography>
                  <TextField
                    id=""
                    label=""
                    placeholder="Enter your email"
                    variant="outlined"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    sx={{
                      width: "100%",
                      background: "#fff",
                      borderRadius: "6px",
                    }}
                  />
                </div>
                <br />
                <div>
                  <Typography gutterBottom fontSize="16px" color="initial">
                    Contact Number
                  </Typography>
                  <TextField
                    id=""
                    label=""
                    placeholder="Enter your contact number"
                    variant="outlined"
                    name="contact"
                    onChange={(e) => handleChange(e)}
                    sx={{
                      width: "100%",
                      background: "#fff",
                      borderRadius: "6px",
                    }}
                  />
                </div>
                <br />
                <div>
                  <Typography gutterBottom fontSize="16px" color="initial">
                    Message
                  </Typography>
                  <TextField
                    id=""
                    label=""
                    placeholder="Enter your message"
                    name="message"
                    onChange={(e) => handleChange(e)}
                    variant="outlined"
                    multiline
                    rows="4"
                    sx={{
                      width: "100%",
                      background: "#fff",
                      borderRadius: "6px",
                    }}
                  />
                </div>
                <br /> <br />
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
                      <Stack
                        sx={{ color: "grey.500" }}
                        spacing={2}
                        direction="row"
                      >
                        <CircularProgress color="secondary" />
                      </Stack>
                    </div>
                  )}
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
