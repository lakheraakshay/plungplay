import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    heading: {
        fontStyle: "normal",
        fontSize: "15px",
        lineHeight: "19px",
        color: '#fff',
        textDecoration: 'none',
        // [theme.breakpoints.down(500)]: {
        //     margin: '50px auto',
        // },
    },
    logoImg: {
        [theme.breakpoints.down(500)]: {
         width:'80%'
        },
    }
}));