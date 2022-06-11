import React from "react";
import { Container, Box } from "@mui/material/";
import Typography from "@mui/material/Typography";
import svname from "../../assets/home/svname.jpg";
import pramod from "../../assets/home/pramod1.jpg";
import aditya from "../../assets/home/aditya1.jpg";

const Team = () => {
  return (
    <>
      <Box sx={{ background: "#F7F7F7", padding: "30px" }}>
        <Container fixed sx={{ margin: { md: "100px auto" } }}>
          <Typography fontSize="32px" fontWeight="700" color="initial">
            Our Team
          </Typography>
          <img src={require("../../assets/commons/line.png")} alt="" />
          <br />
          <br />
          <TeamCard />
        </Container>
      </Box>
    </>
  );
};

export default Team;

const TeamCard = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexWrap: { md: "nowrap", xs: "wrap" },
          justifyContent: { md: "space-between", xs: "center" },
        }}
      >
        {data.map((item) => (
          <>
            <Box
              sx={{ width: { md: "262px", xs: "100%" }, textAlign: "center" }}
            >
              <img src={item?.img} alt="" style={{ width: "100%" }} />
              <Box
                sx={{
                  background: "#13104B",
                  padding: "20px",
                  marginTop: "-10px",
                  height: { md: "130px", xs: 'auto' },
                }}
              >
                <Typography
                  gutterBottom
                  fontSize="20px"
                  fontWeight="600"
                  color="#fff"
                >
                  {item.name}
                </Typography>
                <Typography fontSize="14px" fontWeight="500" color="#fff">
                  {item.role}
                </Typography>
              </Box>
            </Box>
          </>
        ))}
      </Box>
    </>
  );
};
const data = [
  {
    name: "Divyashikha Gupta",
    role: "CEO & Managing Director-Group",
    img: svname,
  },
  {
    name: "S. Venkateswaran",
    role: "Managing Partner- Group",
    img: svname,
  },
  {
    name: "Aditya Vikram Gupta",
    role: "Business Head- CEO- Office",
    img: aditya,
  },
  {
    name: "Pramod Bagdi",
    role: "HR",
    img: pramod,
  },
  // {
  //     name: "Suhas Kshemkalyan",
  //     role: "National Sales and Distribution Head"
  // },
];
