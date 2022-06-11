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
}));