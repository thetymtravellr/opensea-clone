import { Typography } from "@mui/material"
import { useContext } from "react"
import { GlobalContext } from "src/context/GlobalContext"
import useThemeMode from "src/hooks/useThemeMode"
import Link from "~components/Link"
import Container from "~containers/Layouts/Container"
import { HeroTextsStyled,HeroContentStyled, HeroStyledWrapper, HeroButton, HeroTextLogoStyled } from "./style"

const PartnerHero = ({}) => {
const {isDark} = useThemeMode();
  return(
     <HeroStyledWrapper>
       <Container>
          <HeroContentStyled>
              <HeroTextsStyled>
                <HeroTextLogoStyled>
                  {!isDark? <img src="/images/taxes-hero-logos.png"/> : <img src="/images/taxes-hero-logos-dark.png"/>}
                  
                </HeroTextLogoStyled>
                <Typography variant="xl" component="h2" className="hero-title">NFT taxes, simplified.</Typography>
                <Typography color="rgb(53, 56, 64)" variant="base" component="p">We've partnered with CoinTracker, a leading crypto tax offering, to help you navigate your NFT taxes.<br/><br/>
                Get started below to get free tax reports for up to 50 transactions in your first year and 10% off for everything else.
                </Typography>
                <HeroButton>Get started</HeroButton>
              </HeroTextsStyled>
          </HeroContentStyled>
      </Container>
     </HeroStyledWrapper>
   )
}

export default PartnerHero