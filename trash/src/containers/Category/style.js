import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const SectionStyled = styled.div`
  padding-bottom:50px;
  .swiper-slide{
    padding-bottom:10px;
  }
`

SectionStyled.Title = styled(Typography)`
  font-weight: 600;
`

SectionStyled.Title.defaultProps = { variant: 'card-image' }