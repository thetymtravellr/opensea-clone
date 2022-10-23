import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const ItemCard = styled(Box)`
background: ${p => p.theme.palette.mode === "light" ? "rgb(255,255,255)" : "rgb(53,56,64)"};
transition: all 0.25s ease-in-out 0s;
box-shadow: rgb(0 0 0 / 8%) 0px 4px 15px;
border-radius: 10px;
overflow: hidden;
position: relative;
&:hover {
    box-shadow: rgb(0 0 0 / 15%) 0px 6px 25px;
    .btn-container{
        bottom: 0;
    };
};
height: 100%;
a {
    height: 100%;
    width: 100%;
}
`

export const ItemsCardImage = styled(Box)(({ theme, content }) => (`
width: 100%;
height: ${content ? 'null' : '100%'};
overflow: hidden;
img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    transform: scale(1);
    display: block;
    transition: all 0.25s ease-in-out 0s;
}
&:hover img {
    transform: scale(1.05);
}
`))

export const ItemCardContent = styled(Box)`
display: flex;
flex-direction: column;
row-gap: 12px;
color: ${p => p.theme.palette.black};
padding: 12px;
span {
    display: block;
}
`

export const ButtonContainer = styled(Box)`
position: absolute;
bottom: -100px;
width: 100%;
transition: all 0.25s ease-in-out 0s;
`

export const ItemCartButton = styled(Button,{
    shouldForwardProp: isPropValid
})`
width: 100%;
font-size: 16px;
font-weight: 700;
text-align: center;
color: #fff;
background: ${p => p.theme.palette.primary.main};
border-radius: 0;
&:hover {
    background: ${p => p.theme.palette.primary.light}
}
`