
const getDesignTokens = (mode) => {
  return ({
    palette: {
      mode,
      // primary: {
      //   ...amber,
      //   ...(mode === 'dark' && {
      //     main: amber[300],
      //   }),
      // },
      // ...(mode === 'dark' && {
      //   background: {
      //     default: deepOrange[900],
      //     paper: deepOrange[900],
      //   },
      // }),
      // text: {
      //   ...(mode === 'light'
      //     ? {
      //         primary: grey[900],
      //         secondary: grey[800],
      //       }
      //     : {
      //         primary: '#fff',
      //         secondary: grey[500],
      //       }),
      // },
      background: {
        default: mode === "light" ? "rgb(255,255,255)" : "rgb(32, 34, 37)",
        defaultOpacity: mode === "light" ? "rgba(255,255,255)" : "rgba(255,255,255,0.12)",
      },
      headerDropdown:mode === "light" ? "rgb(255,255,255)" : "rgb(48, 51, 57)",
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
      heading: mode === "light" ? "rgb(4, 17, 29)": "rgb(255,255,255)",
      // text: mode === "light" ? "rgb(53, 56, 64)": "rgb(229, 232, 235)",
      black: mode === "light" ? "rgb(4, 17, 29)" : "rgb(255,255,255)",
      white: {
        main: mode === "light" ? "#ffffff" : "rgb(138, 147, 155)",
        dark: "rgb(251, 253, 255)",
      },
      text: {
        fade: mode === "light" ? "rgb(112, 122, 131)" : "rgb(255, 255, 255)",
        main: mode === "light" ? "rgb(53, 56, 64)" : "rgb(138, 147, 155)",
        default: mode === "light" ? "rgb(53, 56, 64)" : "rgb(229, 232, 235)",
      },
      border: {
        main: mode === "light" ? "rgba(229, 232, 235, 0.5)" : "rgba(53, 56, 64, 0.5)",
        dark: mode === "light" ? "rgba(229, 232, 235)" : "rgba(53, 56, 64)",
      },
      popoverBg: mode === "light" ? "rgba(4, 17, 29)" : "rgba(76, 80, 92)",
    }
  })
};

export default getDesignTokens