import styled from "@emotion/styled"
import { Tabs } from "@mui/material"

export const CollectionContainer = styled.div`
.offer-button-white {
  display: flex;
  justify-content: center;
  border-top: 1px solid ${p => p.theme.palette.border.dark};
  margin-top: 15px;
  
  button {
    background: rgb(255,255,255);
    color: rgb(32, 129, 226);
    border: 2px solid ${p => p.theme.palette.border.dark};
    margin: 10px 0;
  }
}
`

export const ItemToolbarStyled = styled(Tabs)`
display:flex;
width: fit-content;
color: #000;
svg {
  width: 22px;
  fill: currentColor;
}
.tooltip-wrapper {
  margin-right: 0;
}
.MuiButtonBase-root {
  opacity: 1;
}
.MuiTabs-indicator{
display:none;
}
`

export const ToolbarButton = styled.div`
width: 50px;
min-width:auto;
display: inline-flex;
flex-direction: column;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
font-size: 16px;
height: 48px;
font-weight: 600;
line-height: 22px;
letter-spacing: 0.01em;
margin-right: 0;
padding: 11px;
opacity: 1;
border: 2px solid ${p => p.theme.palette.border.dark};
border-radius: 0;
color: ${p => p.theme.palette.black};
.MuiTab-root {
  width: 100%;
  min-width: auto;
  max-width: 100%;
}
&:first-of-type{
  border-top-left-radius:12px;
  border-bottom-left-radius:12px;
}
&:last-of-type{
  border-top-right-radius:12px;
  border-bottom-right-radius:12px;
}
&:not(:first-of-type){
  margin-left: -2px;
}
`

export const ItemCardsContainer = styled.div`
overflow-x: scroll;
padding: 20px;
`

export const CardWrapper = styled.div`
display: flex;
column-gap: 30px;

.MuiBox-root {
  min-width:270px;
  width: 100%;
}
`