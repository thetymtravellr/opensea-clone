
import styled from "@emotion/styled";
import { Box, Button, MenuItem } from "@mui/material";
import isPropValid from '@emotion/is-prop-valid'
import { isDarkMode } from "src/utils/getThemeMode";
export const CollectionMenuStyled = styled(Box)`
    padding: 0;
    background: white;
    border-radius: 12px;
    filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px);
`

export const CollectionMenuItem = styled(MenuItem)(({ theme }) =>(`
width: 90px;
padding: 12px 16px;
border-bottom: 1px solid transparent;
transition: all 0.25s ease-in-out 0s;
font-size: 14px;
font-weight: 600;
&:not(:last-child) {
    border-color: ${theme.palette.gray.light}
};
&:hover{
    background: none;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 10px;
}
`))

export const CollectionMenuButton = styled(Button,{
    shouldForwardProp: isPropValid
})(({ theme, menu, anchorEl, active }) =>(`
border-radius: 12px;
// border: 2px solid ${ anchorEl ? 'rgb(53, 56, 64)' : 'rgb(229, 232, 235)'};
border: 2px solid ${ anchorEl ? 'rgb(138, 147, 155)' : isDarkMode(theme) ? "rgb(76, 80, 92)" :'rgb(229, 232, 235)'};
font-weight: 600;
font-size: 12px;
transition: all 0.25s ease-in-out 0s;
color: rgb(53, 56, 64);
display: inline-flex;
align-items: center;
padding: 6px 12px;
width: 80px;
height: 40px;
margin-left: 16px;
color: ${isDarkMode(theme) ? "rgb(255, 255, 255)" : "rgb(4, 17, 29)"};
&:hover {
    background: none;
    box-shadow: rgb(0 0 0 / 5%) 0px 2px 10px;
};
@media screen and (min-width: 992px){
    width: ${menu ? '100px' : '115px'};
    font-size: 16px;
    padding: ${menu ? '8px 16px' : '8px 12px'};
    height: 48px
} ;
svg {
    font-size: 24px;
    margin-left: 6px;
    // opacity: ${active === 'top' ? '1' : '0.5' };
    color:rgb(138, 147, 155);
    pointer-events:none;   

}
`))