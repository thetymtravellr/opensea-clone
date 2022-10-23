import styled from "@emotion/styled"
import { Box } from "@mui/material"

export const FilterHeadStyled = styled.div(({ theme, shadow }) => (`
display:flex;
flex-direction: column;
row-gap: 10px;
z-index: 10;
background: ${theme.palette.background.default};
color: ${theme.palette.mode === 'light' ? "#000" : "#fff"};
padding-bottom:30px;
.filter-head-search{
  margin-left: 12px;
  margin-right: 12px;
  width: 100%;
 
  @media screen and (max-width: 992px){
  margin-left: 0;
  margin-right: 0;
  }
}
.filter-head-sort{
  margin-left: auto;
  width: 240px;
  flex-shrink: 0;
}
.filter-view-switch{
  margin-left: 12px;
  @media screen and (max-width: 992px){
    margin-left: 0;
  }
}
.filter-offer-button{
  margin-left:12px;
  @media screen and (max-width: 992px){
    width: 100%;
    margin-left: 0;
  }
}

@media screen and (min-width: 992px){
  flex-direction: row;
  position: sticky;
  top: 78px;
  
}
`))

export const FilterHeadContent = styled(Box)(({ theme }) => (`
background: ${theme.palette.background.default};
width: calc(100vw - 17px);
padding: 10px 64px;
position: absolute;
left: calc((100vw - (100% + 17px)) / -2);
right: calc((100vw - (100% + 17px)) / -2);
box-shadow:  rgb(0 0 0 / 10%) 0px 2px 10px -2px ;
`))

export const ButtonContainer = styled(Box)(({theme})=>(`
width: 100%;
display: flex;
column-gap: 12px;
// margin: 0 12px;
margin: 0;
& > button: {
  width: 100%;
  color: ${theme.palette.mode.black};
}
`))