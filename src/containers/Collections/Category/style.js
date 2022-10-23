import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { getPalette } from "~utils/getThemeMode";


export const SectionStyled = styled.div`
  padding-bottom:50px;
`


SectionStyled.Title = styled(Typography)`
  font-weight: 600;
  color: ${({theme}) => getPalette(theme,"heading")};
`

SectionStyled.Title.defaultProps = { variant: 'card-image' }