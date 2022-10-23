import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const OfferBlockStyled = styled(Box)`
margin: 20px 0;
@media screen and (min-width: 992px){
    margin: 20px 20px 23px;
}
`

export const OfferHeadContainer = styled.div`
width: 100%;
.MuiTypography-root {
    padding:0 20px 20px;
    display: flex;
    align-items: center;
}
svg {
    display: flex;
    align-items: center;
    width: 24px;
    height: 24px;
}
`

export const OfferTimerContainer = styled.div`
width: 100%;
border-top: 1px solid ${p => p.theme.palette.border.dark};
display: flex;
align-items: center;
column-gap: 50px;
padding: 10px 20px 0;
`

export const OfferTimer = styled.div`
font-size: 20px;
font-weight: 500;
span {
    font-size: 16px;
    font-weight: 400;
    display: block;
}
`

export const OfferPriceStyled = styled.div`
color: rgb(112,112,131);
img {
    width: 24px;
    height: 24px;
    margin-right: 5px;
}
.MuiTypography-root {
    display: block;
}
.currentPrice {
    font-weight: 600;
    color: rgb(53,56,64);
    span {
        font-size: 16px;
        color: rgb(112,112,131);
        font-weight: 400;
    }
}
`

export const OfferButtonContainer = styled.div`

display: flex;
align-items: center;
column-gap: 12px;
width: 100%;
.MuiBox-root {
    width: 100%;
}
button {
    background: rgb(32, 129, 226);
    border: 2px solid transparent;
}
.offer-button-white button {
    background: rgb(255,255,255);
    color: rgb(32, 129, 226);
    border: 2px solid ${p => p.theme.palette.border.dark};
}
`

export const ItemAccordionContainer = styled.div`
margin: 20px 0;
@media screen and (min-width: 992px){
    margin: 20px;
}
.MuiAccordionDetails-root {
    padding: 0;
}
`

export const OfferSmall = styled(Box)`
border: 1px solid ${p => p.theme.palette.border.dark};
border-radius: 12px;
padding: 10px;
background: rgb(251, 253, 255);
`