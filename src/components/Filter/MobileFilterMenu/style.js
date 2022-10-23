import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const FilterMenuStyled = styled(Box)(({ active }) => (`
height: calc(((100% - 0px) - 0px) - 0px);
width: 100%;
padding: 16px;
filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px);
visibility: visible;
transform: translate3d(0px, ${active ? "0px" : "100%"}, 0px);
transition: transform 0.4s cubic-bezier(0.45, 0, 0.55, 1) 0s, opacity 0.4s 0s;
opacity: 1;
overflow: auto;
background: #fff;
position: fixed;
top: 0;
right: 0;
botttom: 0;
left: 0;
z-index: 9999;
`))

export const FilterMenuContainer = styled(Box)`
position:relative;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`;
export const FilterMenuContent = styled(Box)`
.MuiAccordion-root {
    margin: 0;
}
`;

export const FilterMenuHeader = styled(Box)`
display: flex;
align-items: center;
padding-bottom: 16px;
span {
    font-weight: 600;
    width: 100%;
    text-align: center;
};
button {
    color: #000;
}
`

export const FilterMenuBody = styled(Box)`
`

export const FilterMenuFooter = styled(Box)`
border-top: 1px solid ${p => p.theme.palette.gray.light};
background: #fff;
width: 100%;
padding: 20px 0 10px;
display: flex;
column-gap: 12px;
position: sticky;
bottom: -15px;
`