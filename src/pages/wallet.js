import Footer from "~components/Footer";
import Header from "~components/Header";
import WalletCollection from "~containers/Wallet/WalletCollection";

export default function Wallet(){
  return(
    <>
    <Header bg={true} />
    <WalletCollection/>
    <Footer/>
    </>
  )
}
