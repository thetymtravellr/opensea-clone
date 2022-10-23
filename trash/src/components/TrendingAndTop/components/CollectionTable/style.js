import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Link from "../../../Link/index";

export const TableStyled = styled('div')`
width: 100%;
.row {
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;
    z-index: 10;
    position: relative;
    margin-top: 0px;
    display: flex;
    transition: all 0.2s ease-out;

    @media screen and (min-width: 992px){
        min-width: 666px;
    }
}

@media screen and (min-width: 992px){
    width: 45.5%;
}
`

export const HeadStyled = styled('div')`
.head-cell {
    font-size: 12px;
    font-weight: 600;
    color: rgb(112, 122, 131);
}
`

export const BodyStyled = styled('div')``
export const RowStyled = styled('div')`

`

export const LinkRowStyled = styled(Link)`

padding-top: 12px;
padding-bottom: 12px;
font-size: 16px;
font-weight: 600;
&:hover{
    background-color: rgba(229, 232, 235, 0.2);
}
`

export const CellStyled = styled('div')`

width: 100%;
&:nth-of-type(2) {
width: 35%;
display: flex;
    align-items:center;
    justify-content: flex-end;
}

@media screen and (min-width: 992px){
    &:nth-of-type(3){
    width: 35%;
    display: flex;
    align-items:center;
    justify-content: flex-end;
    }
}
`

export const CollectionInfo = styled(Box)`
display: flex;
align-items: center;
`

export const CollectionIndex = styled('span')`
width: 30px;
font-size: 20px;
color: rgb(112, 122, 131);
margin-right: 5px;
`

export const CollectionImage = styled('div')`
width: 72px;
height: 72px;
display: flex;
align-items: center;
justify-content: center;
img {
    width: 68px;
    border-radius: 12px;
}
`

export const CollectionTitle = styled('div')`
padding-left: 24px;
display: flex;
flex-direction: column
`

export const VolumeText = styled('div')(({ theme, state }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [`span`]:{
        color: state === 'increase' ? 'rgb(52, 199, 123);' : state === 'decrease' ? 'rgb(230, 41, 41);' : '',
        fontSize: '14px'
    }
}))

export const MobileVisibleText = styled('p')`
color: rgb(112, 122, 131);
font-size: 12px;
font-weight: 600;
span {
    font-weight: 400
}
`

