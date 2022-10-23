import { Typography } from "@mui/material"
import Link from "~components/Link"
import Container from "~containers/Layouts/Container"
import { HeroContentStyled, HeroImageStyled, HeroStyledWrapper, HeroTextsStyled, HeroTitle } from "./style"

const PartnerHero = ({}) => {
  return(
     <HeroStyledWrapper>
       <Container pb="80px" pt="140px">
          <HeroContentStyled>
              <HeroImageStyled>
                <img src="/images/partner-hero-image.svg" alt="partner" />
              </HeroImageStyled>
              <HeroTextsStyled>
                <HeroTitle variant="xl" component="h2" className="hero-title">Welcome to the world’s largest NFT marketplace.</HeroTitle>
                <Typography variant="base" component="p">At OpenSea, we're excited about a brand new type of digital good often referred to as a non-fungible token, or NFT. NFTs have exciting new properties: they’re unique, provably scarce, liquid, and usable across multiple applications.</Typography>
                <Typography variant="base" component="p">
                We’re proud to be the first and largest marketplace for user-owned digital goods, with everything you need to buy and sell them in one place. <Link>Learn more about us</Link>
                </Typography>
              </HeroTextsStyled>
          </HeroContentStyled>
      </Container>
     </HeroStyledWrapper>
   )
}

export default PartnerHero