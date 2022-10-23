import isPropValid from "@emotion/is-prop-valid"
import styled from "@emotion/styled"
import Box from "@mui/material/Box"

const ContainerStyled = styled((props) => (
<Box {...props}/>),{
  shouldForwardProp:isPropValid
})(({pt,pb,py})=>(
  `
  padding-top:${pt ? pt : py? py:  ""};
  padding-bottom:${pb ? pb : py? py:  ""};
  padding-left:40px;
  padding-right:40px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  `
))

export default ContainerStyled