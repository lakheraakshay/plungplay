import React from 'react'
import { Container, Box, Divider } from '@mui/material/'
import Typography from '@mui/material/Typography'
import { useStyles } from './Style';



const Food = () => {
    const classes = useStyles();

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
                <br />
                <Box sx={{ display: 'flex',justifyContent:'center', gap: '30px', flexWrap: 'wrap' }}>
                    {new Array(9).fill().map(() => (
                        <>
                            <Box sx={{ width: '260px' }}>
                                <img src={require("../../assets/home/prodetail (2).png")} alt="" className={classes.productsImg} />
                                <br />
                                <Typography mt="10px" textAlign="center" fontSize="20px" fontWeight="500" color="initial" >
                                    MRP: 120/-
                                </Typography>
                            </Box>
                        </>
                    ))}
                </Box>
            </Container>
        </>
    )
}


export default Food