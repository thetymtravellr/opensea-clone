import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const FiltersContainer = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 16px;

.MuiToggleButton-root {
    padding: 0;
    border: none;
    font-weight: 700;
   
    div {
        padding: 10px;
    }
    span {
        display: flex;
        align-items: center;
       
    }

    &:first-of-type {
        padding-left: 6px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    &:last-of-type {
        padding-right: 6px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    &:hover {
        background: transparent;
        transition: all 0.2s ease 0s;
        box-shadow: rgb(0 0 0 / 10%) 0px 2px 10px;
    }
`
export const FilterLeft = styled(Box)`
display: flex;
align-items: center;
column-gap: 12px;
`
export const FilterRight = styled(Box)`
`

export const ToggleContainer = styled(Box)`
border: 2px solid ${p => p.theme.palette.border.dark};
border-radius: 12px;
}
`