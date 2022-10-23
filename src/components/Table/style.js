import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Link from "~components/Link";

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
};
.sticky-head {
    position: sticky;
    top: 79px;
    background: ${p => p.theme.palette.background.default};
    z-index: 1;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding: 6px 0;
};
.bordered-head {
    border-bottom: 1px solid ${p => p.theme.palette.gray.light};
    padding: 30px 0;
}
`

export const HeadStyled = styled('div')(({ theme, border, p }) => (`
border-bottom: ${border ? border : "none"};
padding: ${p ? p : "0"};
color: #000;
`))

export const HeadCellStyled = styled(Typography)(({ theme, fs, fw }) => (`
font-weight: ${fw ? fw : '600'};
color: rgb(112, 122, 131);
`))

HeadCellStyled.defaultProps = { variant: '5xs' }

export const BodyStyled = styled('div')(({ theme, p, bg }) => (`
padding: ${p ? p : "0"};
background: ${bg ? bg : theme.palette.background.default};
`))
export const RowStyled = styled('div')(({ theme, pt, pb, pl, pr , b }) => (`
padding-top: ${pt ? pt : "0"};
padding-bottom: ${pb ? pb : "0"};
padding-left: ${pl ? pl : "0"};
padding-right: ${pr ? pr : "0"};
border-bottom: ${b ? b : "none"};
`))

export const LinkRowStyled = styled(Link)`
padding-top: 12px;
padding-bottom: 12px;
font-weight: 600;
color:rgb(4, 17, 29);
&:hover{
    background-color: rgba(229, 232, 235, 0.2);
}
`

export const CellStyled = styled('div')(({ theme, width, bg,p, justifyContent, fs }) => (`
padding: ${p ? p : "0"};
width: ${width ? width : "20%"};
background: ${bg ? bg : "transparent"};
display: flex;
font-size: ${fs ? fs : "16px"};
color: ${theme.palette.black};
align-items:center;
justify-content: ${justifyContent ? justifyContent : "flex-end"};
&:nth-of-type(2),
&:nth-of-type(1) {
    justify-content: flex-start;
}

`))

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
width: 46px;
height: 46px;
display: flex;
align-items: center;
justify-content: center;

img {
    width: 44px;
    height: 44px;
    object-fit: cover;
    border: 1px solid ${p => p.theme.palette.gray.light};
    border-radius: 12px;
}
@media screen and (min-width: 992px){
    width: 52px;
height: 52px;
img {
    width: 50px;
    height: 50px;
}
}

`

export const CollectionTitle = styled('div')`
padding-left: 10px;
display: flex;
flex-direction: column;
.title {
    display: flex;
    align-items: center;

    svg {
        margin-left: 5px;
    }
}
@media screen and (min-width: 992px){
    padding-left: 6px;
}
`

export const VolumeText = styled(Typography)(({ theme, state }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [`span`]: {
        color: state === 'increase' ? 'rgb(52, 199, 123);' : state === 'decrease' ? 'rgb(230, 41, 41);' : '',
    }
}))

//This Text Will Be Shown Only On Mobile Device Under The Title
export const MobileVisibleText = styled(Typography)`
color: rgb(112, 122, 131);
font-weight: 600;
span {
    font-weight: 400
}
`
MobileVisibleText.defaultProps = { variant: '5xs' }

export const MultilineText = styled(Typography)(({ textAlign, lWeight, lSize }) => (`
text-align: ${textAlign ? textAlign : 'right'};
font-size: 14px;
.lightText {
    display: block;
    color: rgb(112, 122, 131);
    font-size: ${lSize ? lSize : "14px"};
    font-weight: ${lWeight ? lWeight : "300"}
}
`))