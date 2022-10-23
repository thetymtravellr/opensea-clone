import styled from "@emotion/styled"
import { isDarkMode } from "src/utils/getThemeMode"

export const HeroStyledWrapper = styled("div")(({theme})=> { 
  return(
  `
  height: 800px;
  width: 100%;
  background-image: url(${isDarkMode(theme) ? "/images/taxes-hero-background-dark.png": "/images/taxes-hero-background.png"});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 1920px;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  @media (min-width: 1600px){
    background-size: 100%;
  }
`
)})
export const HeroContentStyled = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
`

export const HeroTextsStyled = styled("div")(({theme})=>(`
max-width: 525px;
text-align:center;
  .hero-title{
    ${isDarkMode(theme)? "color:#ffff":""};
    margin-bottom:40px;
    
    @media (max-width:1199px){
      text-align:center;
    }
  }
  p{
    color:${isDarkMode(theme)? "#ffff":"rgb(53, 56, 64)"};
    margin-bottom:17px;
  }
`))
export const HeroTextLogoStyled = styled.div`
margin-bottom:35px;
display:none;
@media (min-width:480px){
  display:block;
}
img{
  height:36px;
}
`
export const HeroButton = styled.div`
display: inline-flex;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
border-radius: 12px;
-webkit-box-pack: center;
justify-content: center;
font-size: 16px;
font-weight: 600;
line-height: 22px;
letter-spacing: 0.01em;
padding: 17px 24px;
background-color: rgb(32, 129, 226);
border: 2px solid rgb(32, 129, 226);
color: rgb(255, 255, 255);
margin: 50px 0px;
`