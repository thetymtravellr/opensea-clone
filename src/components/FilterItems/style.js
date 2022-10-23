import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"

export const FilterItemsHeader = styled('div')``

export const TableIndexCellStyled = styled(Typography)`
height: 30px;
display: flex;
align-items: center;
padding: 0 12px;
.label {
    margin-left: 8px;
}
svg {
    fill: currentColor;
}
`

export const MobileRightCellText = styled(Typography)`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-end;
text-align: right;
width: 100%;
font-weight: 400;
color: rgb(112,112,112);
.price {
    font-weight: 600;
    color: #000;
}
`

export const Truncate = styled("span")`
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 120px;
    overflow: hidden;
`