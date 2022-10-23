import { Typography } from "@mui/material"
import Link from "~components/Link"
import Container from "~containers/Layouts/Container"
import TestimonialStyled  from "./style"

const PartnerTestimonial = ({}) => {
  return(
     <TestimonialStyled>
       <TestimonialStyled.Container pb="80px" pt="140px">
          <TestimonialStyled.Wrapper>
            <TestimonialStyled.Row>
                <TestimonialStyled.Texts>
                  <div className="testimonial-icon">
                    <img src="/images/svg/icon-quote.svg" alt="quote" className="testimonial-icon"/>
                  </div>
                  <Typography variant="xl" component="p" className="testimonial-text">OpenSea is one of the most exciting, important companies in the world right now because it's the portal to the new digital economy. If you're interested in shaping a new business model for creators, this is the team to join.</Typography>
                  <TestimonialStyled.User>
                    <Typography variant="text-base" component="h3" fontWeight={600} >Katie Haun</Typography>
                    <p>CEO and Founder, Haun Ventures</p>
                  </TestimonialStyled.User>
                  
                </TestimonialStyled.Texts>
                <TestimonialStyled.Image>
                    <img src="/images/partner-testimonial.webp" alt="" />
                </TestimonialStyled.Image>
            </TestimonialStyled.Row>
          </TestimonialStyled.Wrapper>
      </TestimonialStyled.Container>
     </TestimonialStyled>
   )
}

export default PartnerTestimonial