import { Button, styled } from "@mui/material";

export const FormButtonsStyled = styled(Button)`
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
background-color: rgb(32, 129, 226);
border: 2px solid rgb(32, 129, 226);
color: rgb(255, 255, 255);
&:hover{
    filter: brightness(1.1);
    border: 1px solid rgba(0, 0, 0, 0);
    background-color: rgb(32, 129, 226);
};
div{
    display: flex;
    align-items: center;
}
`