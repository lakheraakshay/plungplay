import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    productsImg: {
        transition: '1s',
        cursor: 'pointer',
        "&:hover": {
            boxShadow: '0px 49px 50px -33px rgba(0, 0, 0, 0.25)'
        },
        [theme.breakpoints.down(600)]: {
            width: '100% '
        },
    }
}));