import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material'
export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            appView: 1024,
            lg: 1200,
            xl: 1536,
        }
    }
})
declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        // xs: false; // removes the `xs` breakpoint
        // sm: false;
        // md: false;
        // lg: false;
        // xl: false;
        // mobile: true; // adds the `mobile` breakpoint
        // tablet: true;
        appView: true;
        // desktop: true;
    }
}