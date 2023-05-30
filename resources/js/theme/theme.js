import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
    
    },
    background: {
        
    },
    typography: {
        // fontFamily : "cursive" // To set later
        button: {
            textTransform: "capitalize",
        },
    },
});
