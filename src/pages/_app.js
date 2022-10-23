import "../assets/scss/global.scss";
// import { ThemeProvider } from "@mui/material";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import Layout from "~containers/Layouts/Layout";
import theme from "../theme";
import GlobalProvider from "../context/GlobalContext";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }) {
  
  return (
    <GlobalProvider>
      <CssBaseline/>
        <Layout >
          <Component {...pageProps} />
        </Layout>
    </GlobalProvider>
  );
}

export default MyApp;
