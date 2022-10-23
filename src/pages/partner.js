import PartnerHero from "~containers/PartnerPage/Hero"
import Partners from "~containers/PartnerPage/Partners"
import PartnerWhy from "~containers/PartnerPage/Why"
import Footer from "~components/Footer"
import Testimonial from "~containers/PartnerPage/Testimonial"
import Faq from "~containers/PartnerPage/Faq"
import Header from "~components/Header"
export default function Partner(){
  return(
      <>
      <Header bg={true}/>
      <PartnerHero/>  
      <PartnerWhy/>  
      <Partners/>
      <Faq/>
      <Testimonial/>
      <Footer/>
      </>
    )
}