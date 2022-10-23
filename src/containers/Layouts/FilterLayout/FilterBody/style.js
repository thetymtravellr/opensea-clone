
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const FilterBodyStyled = styled(Box)`
width: 100%;
margin-top: 10px;

@media screen and (max-width: 992px){
    .MuiGrid-root {
        // margin-left: 0;
    }
}
`

export const FilterHeading = styled(Box)`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding:12px 0;
color: ${p => p.theme.palette.black};
`

export const FilterRefresh = styled(Box)`

display: flex;
align-items: center;
button {
    width: 48px;
    height: 48px;
    padding: 12px;
    border-radius: 50%;
    margin-right: 8px;

    &:hover {
        background: ${p => p.theme.palette.popoverBg};
        transition: all 0.2s ease 0s;
        box-shadow: rgb(0 0 0 / 10%) 0px 2px 10px;
    };
};
svg {
    color: ${p => p.theme.palette.black};
}

color: rgb(112, 122, 131);
`