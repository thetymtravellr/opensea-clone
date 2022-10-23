import styled from "@emotion/styled";
import { isDarkMode } from "src/utils/getThemeMode";

const FaqStyled = styled.div`
padding-top:80px;
padding-bottom:100px;
${({theme}) => isDarkMode(theme) && `
  background-color:rgb(38, 43, 47);
`}
`

FaqStyled.Accordions = styled.div`
max-width: 700px;
margin:30px auto 0;
.text-link{
  color:rgb(32, 129, 226);
  &:hover{
    color:rgb(24, 104, 183);
  }
}
`
FaqStyled.Head = styled.div`
  max-width:702px;
  margin:0 auto;
  text-align:center;
  h2{
    margin-bottom:20px;
    color:${({theme}) => theme.palette.heading}
  }
  a{
    color:rgb(32, 129, 226);
  }
`


export default FaqStyled;