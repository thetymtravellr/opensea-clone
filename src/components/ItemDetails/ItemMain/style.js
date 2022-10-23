import styled from "@emotion/styled";
import { Box, Button, Tabs, Typography } from "@mui/material";


const ItemMainStyled = styled.div`
margin-left: -20px;

.offer-accordion {
    .MuiAccordionSummary-root {
        padding: 0;
    }
    .MuiAccordionSummary-content {
        padding-left: 0;
    }
}
`

ItemMainStyled.Header = styled.div`
margin-top: 40px;
@media screen and (min-width: 992px){
    margin: 20px 20px 15px;
}
`

export const ItemCollectionInfo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`

ItemCollectionInfo.Detail = styled.div`
text-overflow: ellipsis;
white-space: nowrap;
max-width: 200px;
width: 100%;
overflow: hidden;
`
ItemCollectionInfo.Toolbar = styled.div``

export const ItemCountStyled = styled(Box)`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
@media screen and (min-width: 992px){
    justify-content: flex-start;
    margin: 24px 20px;
}
`

export const ItemCountText = styled(Typography)`
font-size: 15px;
font-weight: 400;
color: rgb(112, 122, 131);
margin-right: 20px;
display: flex;
align-items: center;
svg {
    margin-right: 10px;
    width: 24px;
}
`

export default ItemMainStyled;

