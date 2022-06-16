import React from "react";
import { Container, Box, Divider, TextField, Button } from "@mui/material/";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useStyles } from "./Style";

const MouthFresh = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [mouthFreshner, setmouthFreshner] = React.useState(["89", "89", "89", "89", "89", "89", "89", "89", "89", "89", "89"]);
 
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
          Categories - Mouth Freshners
        </Typography>
        <br />
        <Divider />
        <br />
        <br />
        <Typography fontSize="24px" fontWeight="500" color="initial">
          Mouth Freshner
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
          {mouthFreshner.map((item, i) => (
            <>
              <Box sx={{ width: "260px" }}>
                <img
                  src={require(`../../assets/home/mouthfreshner ${i + 1}.png`)}
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

export default MouthFresh;
