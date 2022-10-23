import "../assets/scss/global.scss";
import { ThemeProvider } from '@mui/material';
import 'swiper/css';
import "swiper/css/lazy";
import "swiper/css/navigation";
import Layout from '../containers/Layout';
import theme from '../theme';
function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Layout><Component {...pageProps} /></Layout>
  </ThemeProvider>
}

export default MyApp
