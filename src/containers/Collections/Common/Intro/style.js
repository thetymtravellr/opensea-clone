import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { getPalette } from "~utils/getThemeMode";

export const SectionIntro = styled(Box)`
margin-bottom: 48px;
@media(min-width:992px){
  max-width: 65%;
}
h1 {
    padding: 32px 0 16px;
    color: ${({theme}) => getPalette(theme,"heading")};
}
p{
  color: ${({theme}) => getPalette(theme,"text").default}
}
`