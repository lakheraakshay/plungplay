import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#F1592A",
            dark: "#F1592A",
        },
        secondary: {
            main: "#F1592A",
            light: "#fff",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: "Poppins",
    },
});


const theme = {
    ...defaultTheme,
    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "56px",
                    lineHeight: "84px",
                    color: '#000',
                    [defaultTheme.breakpoints.down(1200)]: {
                        color: 'red',
                    },
                },
            },
        },
    },

};

export default theme;