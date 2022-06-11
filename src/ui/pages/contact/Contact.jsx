import React from "react";
import { Container, Box, Grid } from "@mui/material/";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Contact = () => {
  return (
    <>
      <div>
        <img
          src={require("../../assets/home/contactusheader.png")}
          alt=""
          style={{ width: "100%" }}
        />
      </div><br/>
      <Container fixed sx={{ margin: { md: "100px auto" } }}>
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          alignContent="center"
          wrap="wrap-reverse"
          sx={{ marginTop: "-8px" }}
        >
          <Grid item xl="5" md="5" xs="12" sx={{padding:'20px'}}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img src={require("../../assets/home/contact (2).png")} alt="" />
              <Typography gutterBottom fontSize="20px" color="initial">
                sales@stalwartworld.com
              </Typography>
            </Box>
            <br />
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img src={require("../../assets/home/contact (2).png")} alt="" />
              <Typography gutterBottom fontSize="20px" color="initial">
                rajasi@stalwartworld.com
              </Typography>
            </Box>
            <br />
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img src={require("../../assets/home/contact (1).png")} alt="" />
              <Typography gutterBottom fontSize="20px" color="initial">
                +91-97665 64158
              </Typography>
            </Box>
            <br />
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img src={require("../../assets/home/contact (1).png")} alt="" />
              <Typography gutterBottom fontSize="20px" color="initial">
                +91-89833 81662
              </Typography>
            </Box>
          </Grid>
          <Grid item xl="7" md="7" xs="12">
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
              <div>
                <Typography gutterBottom fontSize="20px" color="initial">
                  Name
                </Typography>
                <TextField
                  id=""
                  placeholder="Enter your name"
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
                  Message
                </Typography>
                <TextField
                  id=""
                  label=""
                  placeholder="Enter your message"
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
