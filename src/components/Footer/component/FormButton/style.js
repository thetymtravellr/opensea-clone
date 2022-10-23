import isPropValid from "@emotion/is-prop-valid";
import { Button, styled } from "@mui/material";
import { isDarkMode } from "src/utils/getThemeMode";

export const FormButtonsStyled = styled(Button,{
    shouldForwardProp:isPropValid
})(({theme})=>(`
height: 54px;
width: 54px;
margin-top: 8px;
margin-right: 12px;
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
color: rgb(255, 255, 255);
${isDarkMode(theme) ? `
background-color: rgb(53, 56, 64);
border: 2px solid rgb(53, 56, 64);
&:hover{
    border: 1px solid rgba(0, 0, 0, 0);
    background-color: rgb(32, 129, 226);
}

`:`

background-color: rgb(32, 129, 226);
border: 2px solid rgb(32, 129, 226);
&:hover{
    filter: brightness(1.1);
    border: 1px solid rgba(0, 0, 0, 0);
    background-color: rgb(32, 129, 226);
}
`}
div{
    display: flex;
    align-items: center;
}
`))