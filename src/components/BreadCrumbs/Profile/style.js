import styled from "@emotion/styled"
import { Box } from "@mui/material"

export const ProfileStyled = styled(Box)(({ theme })=>(`
 background-color: ${theme.palette.background.default}; 
`))

ProfileStyled.Image = styled.div`
  height: 0px;
  padding-bottom: 25%;
  position: relative;
  background-color: rgba(229, 232, 235, 0.314);
  img{
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    right:0;
  }
`
ProfileStyled.ImageSmall = styled.div`
  --size: 90px;
  box-shadow: rgb(0 0 0 / 8%) 0px 5px 20px 0px;
  border-radius: 16px;
  background: rgb(255, 255, 255);
  width: var(--size);
  height: var(--size);
  border: 4px solid rgb(255, 255, 255);
  position:relative;
  margin-top:-90px;
  @media (min-width:575px){
    --size: 120px;
    border: 6px solid rgb(255, 255, 255);
  }
  @media (min-width:992px){
    margin-top:-140px;
    --size: 180px;
  }
  img{
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    right:0;
    border-radius:inherit;
  }
`