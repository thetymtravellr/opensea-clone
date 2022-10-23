import styled from "@emotion/styled";
import { isDarkMode } from "src/utils/getThemeMode";

const WhatStyled = styled.div`
padding-top:80px;
padding-bottom:100px;
${({theme}) => isDarkMode(theme) && `
  background-color:rgb(38, 43, 47);
`}
`

WhatStyled.Head = styled("div")(({theme}) => (`
max-width:702px;
margin:0 auto;
text-align:center;
h2{
  margin-bottom:20px;
  color: ${theme.palette.heading};
}
`))
WhatStyled.Widgets = styled.div`
display: flex;
margin:0 auto;
flex-wrap:wrap;
max-width: 500px;
text-align: left;
max-width: 500px;
@media (min-width: 992px){
    max-width: 1000px;
}
`
WhatStyled.WidgetCol = styled.div`
  margin-left: auto;
  margin-right: auto;
  flex-shrink:0;
  margin-top:30px;
  width:100%;
  @media (min-width:992px){
    width:50%;
  }
`
export default WhatStyled;