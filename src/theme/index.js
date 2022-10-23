import typography from "./typography";

// const colors = getDesignTokens();
const theme ={

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
 typography:{...typography},
  // palette: {
  //   primary: {
  //     light: "#2081e2",
  //     main: "#007aff",
  //     dark: "#1868b7"
  //   },
  //   gray: {
  //     light: "#e5e8eb", // rgb(229, 232, 235)
  //     main: "#8a939b", //rgb(138 147 155)
  //     dark: "#707a83",
  //   },
  //   black: {
  //     main: "#000000"
  //   },
  //   white: {
  //     main: "#ffffff",
  //     dark: "rgb(251, 253, 255)"
  //   }
  // },
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
      // defaultProps: {
      //   // The props to change the default for.
      //   maxWidth: false,// No more ripple, on the whole application 💣!
      //   disableGutters: true
      // },
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
        // disableFocusRipple: true
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
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          // background: '#000',
          padding: '12px 20px',
          fontSize: '14px',
          borderRadius: '10px'
        },
        arrow: {
          // color: '#000',
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        // disableFocusRipple: true,
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
};

export default theme;