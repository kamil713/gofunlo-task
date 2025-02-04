"use client"

import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-mulish)',
        button: {
            textTransform: 'none',
        },
    }
});

export default theme;