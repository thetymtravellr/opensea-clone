import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

export const MeadiaFrameStyled = styled(Box)`
background: ${p => p.theme.palette.background.default};
border: 1px solid ${p => p.theme.palette.border.dark};
border-radius: 12px;
overflow: hidden;
height: fit-content;
margin: 20px 0;
@media screen and (min-width: 992px){
    margin: 20px;
}
`

export const Media = styled(Box)``

Media.Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
font-weight: 500;
padding: 12px;
height: 42px;
width: 100%;
background: rgb(255, 255, 255);
-webkit-box-align: center;
-webkit-box-pack: justify;

.MuiIconButton-root {
    padding: 0;
}
`

export const FavoriteButton = styled(Button)`
font-size: 14px;
color: black;

svg {
    width: 20px;
}
&:hover {
    background: none;
    color: rgb(235, 87, 87);
}
`

Media.Image = styled(Box)`
width: 100%;
height: 100%;
img {
    display: block;
    max-width: 100%;
    height: 100%;
}
`

export const SummaryFrameStyled = styled(Box)`
margin: 20px 0;
@media screen and (min-width: 992px){
    margin: 20px;
}
.property-accordion{
    .MuiAccordionDetails-root{
        padding:5px;
    }
}
`

export const AccordionGroup = styled(Box)`
border: 1px solid ${p => p.theme.palette.border.dark};
border-radius: 10px;
overflow: hidden;

.MuiPaper-elevation {
    border-left-width: 0;
    border-right-width: 0;
    border-radius: 0;
}

.text-accordion .MuiAccordionDetails-root {
padding: 30px;
}
.details-accordion .MuiAccordionDetails-root{
    padding: 20px;
}

`