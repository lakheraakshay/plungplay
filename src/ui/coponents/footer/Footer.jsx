import React from 'react'
import { Box } from '@mui/system'
import { Container, Grid, Typography, Stack, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
            <Box sx={{ height: 'auto', backgroundColor: '#4A4A4A', padding: { md: '70px', xs: '30px' } }}>
                <Container fixed>
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        alignContent="center"
                        wrap="wrap"
                    >
                        <Grid item xl="5" md="5" xs="12"  >
                            <img src={require("../../assets/commons/logo.png")} alt="" />
                            <br />
                            <br />
                            <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#fff' }}>
                                Copyright 2019 The Stalwart Company. All Rights Reserved.
                            </Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: '500', color: '#fff' }}>
                                Stalwart Business Consortium LLP (SBCL) - A Stalwart World Company- INDIA’s first and one of its kind <span style={{ color: '#F1592A' }}>'Plug-N-Play Sales</span> Implementation and <span style={{ color: '#F1592A' }}>Route To Market'</span> organization
                            </Typography>
                        </Grid>
                        <Grid item xl="4" md="4" xs="12" >
                            <br /><br />
                            <Stack
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem sx={{ backgroundColor: '#fff' }} />}
                                spacing={2}
                                flexWrap="wrap"
                            >
                                <Box>
                                    <Typography sx={{cursor:'pointer'}}
                                    onClick={()=>navigate("/gallery")}
                                    variant="body1" color="#fff">Gallery</Typography>
                                </Box>
                               
                                <Box>
                                    <Typography variant="body1" color="#FFF">Careers</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" color="#FFF">Faqs</Typography>
                                </Box>
                            </Stack>
                            <br /><br />
                            <Stack
                                direction="row"
                                spacing={3}
                                flexWrap="wrap"
                            >
                                <Box>
                                    <img src={require("../../assets/home/socials (1).png")} alt="" />
                                </Box>
                                <Box>
                                    <img src={require("../../assets/home/socials (2).png")} alt="" />
                                </Box>
                                <Box>
                                    <img src={require("../../assets/home/socials (3).png")} alt="" />
                                </Box>
                                <Box>
                                    <img src={require("../../assets/home/socials (4).png")} alt="" />
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Footer