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
const Career = () => {
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
          src={require("../../assets/home/career.png")}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <Container fixed sx={{ margin: { md: "50px auto" } }}>
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          sx={{ marginTop: "-8px" }}
        >
          <Grid item xl="4" md="4" xs="12">
            <img
              src={require("../../assets/home/hiring.png")}
              alt=""
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xl="6" md="6" xs="12">
            <Box
              sx={{
                background: "#F6F6F6",
                padding: "30px",
                borderRadius: "16px",
              }}
            >
              <Typography
                textAlign={"center"}
                fontSize="40px"
                fontWeight="700"
                color="initial"
              >
                We Are Hiring!
              </Typography>
              <br />
              <form onSubmit={onSubmit}>
                <div>
                  <Typography gutterBottom fontSize="20px" color="initial">
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
                  <Typography gutterBottom fontSize="20px" color="initial">
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
                  <Typography gutterBottom fontSize="20px" color="initial">
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
                  <input
                    accept="image/*"
                    // className={classes.input}
                    style={{ display: "none" }}
                    id="raised-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="raised-button-file">
                    <Button
                      variant="raised"
                      component="span"
                      style={{
                        fontSize: "18px",
                        width: "100%",
                        padding: "15px 20px",
                        background: "rgba(255, 255, 255, 0.7)",
                        borderRadius: 8,
                        marginTop: 12,
                      }}
                    >
                      ATTACH YOUR Resume
                    </Button>
                  </label>
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

export default Career;
