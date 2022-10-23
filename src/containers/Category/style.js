import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const SectionStyled = styled.div`
  padding-bottom:50px;
  .swiper-slide{
    padding-bottom:10px;
  }
`

SectionStyled.Title = styled(Typography)(({ theme }) =>(`
font-weight: 600;
color: ${theme.palette.mode === "light" ? "rgb(4, 17, 29)" : "rgb(255,255,255)"};
`))


SectionStyled.Title.defaultProps = { variant: 'card-image' }