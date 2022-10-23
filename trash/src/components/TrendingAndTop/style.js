import styled from "@emotion/styled";
import { ToggleButton } from "@mui/material";
import Box from "@mui/system/Box";

export const TrendingContainer = styled('div')`
padding-bottom: 40px;
width: 100%
`

export const TrendingButtonsContainer = styled(Box)(({ theme }) => ({
    borderBottom: `2px solid ${theme.palette.gray.light}`,
    marginBottom: '28px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

export const CollectionButtonsContainer = styled(Box)`
display: flex;
align-items: center;
background: white;
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
    "&:hover": {
        background: 'none',
    },
    "&.Mui-selected, &.Mui-selected:hover": {
        color: "black",
        background: 'none',
        position: 'relative'
      },
    "&.Mui-selected::after":{
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        background: 'black',
        bottom: '0'
    },
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