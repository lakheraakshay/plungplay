import React from 'react'
import { Container, Box, Divider } from '@mui/material/'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useStyles } from './Style';

import Slider from "react-slick";


const Details = () => {
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div>
                <img src={require("../../assets/home/prodbg.png")} alt="" style={{ width: '100%' }} />
            </div>
            <Container fixed sx={{ margin: { md: '50px auto' } }}>
                <Typography fontSize="32px" fontWeight="700" color="initial" >
                    Categories- Beverages
                </Typography>
                <br />
                <Divider />
                <br />
                <br />
                <Button variant="outlined" size="large" sx={{ color: "#000", borderColor: '#000' }}>
                    BORECHA
                </Button>
                <br />
                <br />
                <Slider {...settings}>
                    {new Array(30).fill("").map(() => (<>
                        <Box>
                            <img src={require("../../assets/home/prodetail (1).png")} alt="" className={classes.productsImg} />
                        </Box>
                    </>))}
                </Slider>
                <br />
                <br />
                <Button variant="outlined" size="large" sx={{ color: "#000", borderColor: '#000' }}>
                    CRAVO
                </Button>
                <br />
                <br />
                <Slider {...settings}>
                    {new Array(30).fill("").map(() => (<>
                        <Box>
                            <img src={require("../../assets/home/prodetail (2).png")} alt="" className={classes.productsImg} />
                        </Box>
                    </>))}
                </Slider>
                {/* <br />
                <br />
                <Button variant="outlined" size="large" sx={{ color: "#000", borderColor: '#000' }}>
                    CHILLINC
                </Button>
                <br />
                <br />
                <Slider {...settings}>
                    {new Array(30).fill("").map(() => (<>
                        <Box>
                            <img src={require("../../assets/home/prodetail (3).png")} alt="" className={classes.productsImg} />
                        </Box>
                    </>))}
                </Slider> */}
            </Container>
        </>
    )
}

export default Details