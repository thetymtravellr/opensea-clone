import Faq from "~containers/TextesPage/Faq";
import Hero from "~containers/TextesPage/Hero";
import TaxesFeature from "~containers/TextesPage/Feature";
import Footer from "~components/Footer";
import Header from "~components/Header";

export default function Taxes(){
  return(
    <>
    <Header bg={true} />
    <Hero/>
    <TaxesFeature/>
    <Faq/>
    <Footer/>
    </>
  )
}
