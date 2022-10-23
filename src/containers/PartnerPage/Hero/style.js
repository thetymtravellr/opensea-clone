import styled from "@emotion/styled"
import { Typography } from "@mui/material"

export const HeroStyledWrapper = styled.div`
  display:flex;
`
export const HeroContentStyled = styled.div`
@media (min-width:1200px){
  display:flex;
  flex-direction: row-reverse;
  align-items:center;
}

`
export const HeroImageStyled = styled.div`
  text-align:center;
  img{
    max-width:100%;
  }
  @media (min-width:1200px){
    flex-shrink:0;
    width:50%;
    text-align:left;
  }
`
export const HeroTextsStyled = styled.div`
  .hero-title{
    margin-bottom:40px;
    
    
    @media (max-width:1199px){
      margin-top:40px;
      text-align:center;
    }
  }
  p{
    margin-bottom:17px;
    color: ${p => p.theme.palette.mode === "light"};
  }
`

export const HeroTitle = styled(Typography)`
color: ${p => p.theme.palette.black}
`