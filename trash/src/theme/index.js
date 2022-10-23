import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xxs:320,
      xs: 480,
      sm: 575,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
      xl3: 1600,
      xl4:1800,
      xl5:2200,
    },
  },
  typography:{
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '0.16px',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    allVariants: {
      fontFamily:"Poppins, sans-serif",
      textTransform: "none",
    },
    '2xl': {
      fontSize: 48,
      lineHeight: 1.166,
    },
    'xl': {
      fontSize: 40,
      lineHeight: 1.1
    },
    'lg': {
      fontSize: 32,
      lineHeight: 1.1875
    },
    'md': {
      fontSize: 30,
      lineHeight: 1.4
    },
    'sm': {
      fontSize: 24,
      lineHeight: 1.33
    },
    'xs': {
      fontSize: 20,
      lineHeight: 1.4
    },
    'base': {
      fontSize: 16,
      lineHeight: 1.5
    },
    '2xs': {
      fontSize: 15,
      lineHeight: 1.5
    },
    '3xs': {
      fontSize: 14,
      lineHeight: 1.5
    },
    '4xs': {
      fontSize: 13,
      lineHeight: 1.5
    },
    '5xs': {
      fontSize: 12,
      lineHeight: 1.5
    },
    '6xs': {
      fontSize: 11,
      lineHeight: 1.5
    },
  },
  palette: {
    primary: {
      light: "#2081e2",
      main: "#007aff",
      dark: "#1868b7"
    },
    gray: {
      light: "#e5e8eb", // rgb(229, 232, 235)
      main: "#8a939b", //rgb(138 147 155)
      dark: "#707a83",
    },
    black: {
      main: "#000000"
    },
    white: {
      main: "#ffffff",
      dark: "rgb(251, 253, 255)"
    }
  },
  components: {
    // Name of the component
    MuiContainer: {
      defaultProps: {
        // The props to change the default for.
        maxWidth: false,// No more ripple, on the whole application 💣!
        disableGutters: true
      },
      styleOverrides: {
        root: {
          // Some CSS
          padding: "0px 16px",
          maxWidth: "2560px",
          "@media (min-width:1200px)": {
            padding: "0px 32px;"
          },
          "@media (min-width:1600px)": {
            padding: "0px 64px"
          }
        },
      },
    },
    MuiAppBar:{
      defaultProps: {
        // The props to change the default for.
        maxWidth: false,// No more ripple, on the whole application 💣!
        disableGutters: true
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: "0px",
          "@media (min-width:1200px)": {
            padding: "78px 0px 0px"
          },
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true
      },
      styleOverrides: {
        root: {
          fontSize: '16px',
          lineHeight: '22px',
          letterSpacing: '.16px',
          borderRadius: '12px',
          minWidth: '0'
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
        }
      }
    },
    MuiTableCell: {
      styleOverrides:{
        root: {
          border: 'none',
        },
        head: {
          fontSize: '12px',
          fontWeight: 600,
          lineHeight: '18px',
          color: 'rgb(112, 122, 131)',
        },
        body: {
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '24px',
        }
      }
    },
    MuiPaper:{
      styleOverrides:{
        root:{
          // borderRadius: '12px'
        }
      }
    }
  },
});

export default theme;