import styled from "@emotion/styled";
import { ToggleButton } from "@mui/material";
import Box from "@mui/system/Box";
import { isDarkMode } from "src/utils/getThemeMode";

export const TrendingContainer = styled('div')`
padding-bottom: 50px;
width: 100%
`

export const TrendingButtonsContainer = styled(Box)(({ theme }) => ({
    borderBottom: `1px solid ${isDarkMode(theme) ? "rgba(53, 56, 64, 0.5)": "rgba(229, 232, 235, 0.5)"}`,
    marginBottom: '28px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ["& .MuiTabs-indicator"]:{
        background: isDarkMode(theme) ? "white":"black",
    }
}))

export const CollectionButtonsContainer = styled(Box)`
display: flex;
align-items: center;
transform: translateY(-8px);
@media screen and (min-width: 992px){
    transform: translateY(0)
}
`

export const TrendingButton = styled(ToggleButton)(({ theme }) => ({
    fontSize: '16px',
    border: 'none',
    borderBorder: '2px solid green',
    marginRight: '35px',
    padding: '0 0 10px 0',
    letterSpacing: '0',
    height: '100%',
    color: isDarkMode(theme) ? "rgb(138, 147, 155)":"rgb(112, 122, 131)",
    transition:".4s",
    "&.Mui-selected, &:hover": {
        color: isDarkMode(theme) ? "white":"black",
        background: 'none!important',
        position: 'relative'
      },
    // "&.Mui-selected::after":{
    //     content: '""',
    //     position: 'absolute',
    //     width: '100%',
    //     height: '2px',
    //     background: isDarkMode(theme) ? "white":"black",
    //     bottom: '0'
    // },
    "@media screen and (min-width: 992px)":{
        fontSize: '32px'
    }
}))

export const TrendingItemsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    ['.flexItemCenter']:{
        display: 'flex',
        alignItems: 'center'
    }
}))