import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ItemContainerStyled = styled(Box)`
margin: 0 auto 0;
padding: 8px 8px 16px;
width: 600px;
max-width: 100%;
@media screen and (min-width: 1024px){
    width: 1280px;
    padding-left: 0px;
    padding-right: 0px;
}
.table-accordion {
    .MuiAccordionDetails-root {
        padding: 0;
    }
}
`

export const ItemWrapper = styled(Box)`
display: flex;
width: 100%;

@media screen and (max-width: 1023px){
    flex-direction: column;
    
.item--summary {
    width: 600px;
    max-width: 100%;
    min-width: 100%;
}

.item--main {
    width: 600px;
    max-width: 100%;
    min-width: 100%;
    margin-left: 0px;
}

}
flex-direction: row;


@media screen and (min-width: 1024px){
    .item--summary {
        flex: 3 0 0%;
        max-width: 43%;
        min-width: 43%;
        width: 0px;
    }
    
    .item--main {
        flex: 4 0 0%;
        margin-left: -20px;
    }
}
`