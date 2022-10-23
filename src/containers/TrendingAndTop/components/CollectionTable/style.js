import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { isDarkMode } from "src/utils/getThemeMode";
import Link from "../../../../components/Link";

export const TableStyled = styled('div')`
width: 100%;
.row {
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;
   
    position: relative;
    margin-top: 0px;
    display: flex;
    transition: all 0.2s ease-out;
}

@media screen and (min-width: 992px){
    width: 45.5%;
}
`

/* ----- TABLE HEADER ROW ------ */
// HEADER ROW
export const HeadStyled = styled('div')``
// HEADER ROW CELLS
export const HeadCellStyled = styled(Typography)`
font-weight: 600;
color: rgb(112, 122, 131);
`
HeadCellStyled.defaultProps = { variant: '5xs' }

export const BodyStyled = styled('div')``
export const RowStyled = styled('div')``

export const LinkRowStyled = styled(Link)(({theme})=> {
    return(
        `
            padding-top: 12px;
            padding-bottom: 12px;
            font-weight: 600;
            color:rgb(4, 17, 29);
            border-radius:3px;
            &:hover{
                background-color: ${isDarkMode(theme) ? "rgba(76, 80, 92, 0.2)": "rgba(229, 232, 235, 0.2)"};
            }
        `
    )
})

export const CellStyled = styled('div')(({theme})=>{
    return(
        `
        width: 100%;
        color:${isDarkMode(theme) ? "rgb(255, 255, 255)": "rgb(4, 17, 29)"};
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
    )
})

export const CollectionInfo = styled(Box)`
display: flex;
align-items: center;
`

export const CollectionIndex = styled(Typography)`
width: 30px;
color: rgb(112, 122, 131);
margin-right: 5px;
`
CollectionIndex.defaultProps = { variant: 'xs' }

export const CollectionImage = styled('div')`
width: 72px;
height: 72px;
display: flex;
align-items: center;
justify-content: center;
img {
    width: 68px;
    height: 68px;
    object-fit: cover;
    border-radius: 12px;
}
`

export const CollectionTitle = styled('div')(({theme})=>{
    return(
        `
        padding-left: 24px;
        display: flex;
        flex-direction: column;
        .title {
            display: flex;
            align-items: center;
            color:${isDarkMode(theme) ? "rgb(255, 255, 255)": "rgb(4, 17, 29)"};
            svg {
                margin-left: 5px;
            }
        }
        `
    )
})

export const VolumeText = styled(Typography)(({ theme, state }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [`span`]: {
        color: state === 'increase' ? 'rgb(52, 199, 123);' : state === 'decrease' ? 'rgb(230, 41, 41);' : '',
    }
}))
VolumeText.defaultProps = { variant: '3xs' }

//This Text Will Be Shown Only On Mobile Device Under The Title
export const MobileVisibleText = styled(Typography)`
color: rgb(112, 122, 131);
font-weight: 600;
span {
    font-weight: 400
}
`
MobileVisibleText.defaultProps = { variant: '5xs' }