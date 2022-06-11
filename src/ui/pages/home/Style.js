import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    Container: {
        margin: '100px auto',
        border: '1px solid #000',
        padding: '20px',
        borderRadius: '20px',
        // "&:hover": {
        // },
        [theme.breakpoints.down(500)]: {
            margin: '50px auto',
        },
    },
    productsImg: {
        transition: '1s',
        cursor: 'pointer',
        "&:hover": {
            boxShadow: '0px 49px 50px -33px rgba(0, 0, 0, 0.25)'
        },
    }
}));