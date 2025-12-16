
import { amber, blue, grey } from '@mui/material/colors';

type Mode = 'light' | 'dark';


export const getDesignTokens = (mode:Mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // Palette values for light mode
                primary: {
                    main: blue[700],
                },
                divider: grey[200],
                background: {
                    default: '#fff',
                    paper: '#fff',
                },
                text: {
                    primary: grey[900],
                    secondary: grey[700],
                },
            }
            : {
                // Palette values for dark mode
                primary: {
                    main: amber[500],
                },
                divider: amber[700],
                background: {
                    default: '#121212',
                    paper: '#1d1d1d',
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
            }),
    },
    // Other shared properties (typography, spacing, etc.) go here
    typography: {
        fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
});

// To use it:
// const theme = createTheme(getDesignTokens(mode));