import React from 'react'
import { Container, Box } from '@mui/material/'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useStyles } from './Style';
import Slider from "react-slick";

const Products = () => {
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
            <Box sx={{ background: '#D9D9D9 ',padding:'10px' }}>
                <Container fixed sx={{ margin: '100px auto' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <Typography fontSize="32px" fontWeight="700" color="initial" >
                                Our Products
                            </Typography>
                            <img src={require("../../assets/commons/line.png")} alt="" />
                        </div>
                        <Button variant="text" sx={{ color: '#000', textDecoration: 'underline' }}>
                            View All
                        </Button>
                    </Box>
                    <br />
                    <br />
                    <Slider {...settings}>
                        <Box>
                            <img src={require(`../../assets/home/homeprod (1).png`)} alt="" className={classes.productsImg} />
                        </Box>
                        <Box>
                            <img src={require(`../../assets/home/homeprod (2).png`)} alt="" className={classes.productsImg} />
                        </Box>
                        <Box>
                            <img src={require(`../../assets/home/homeprod (5).png`)} alt="" className={classes.productsImg} />
                        </Box>
                        <Box>
                            <img src={require(`../../assets/home/homeprod (4).png`)} alt="" className={classes.productsImg} />
                        </Box>
                    </Slider>
                </Container>
            </Box>
        </>
    )
}

export default Products