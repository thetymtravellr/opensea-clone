import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import InputBase from '@mui/material/InputBase';
export const InputStyled = styled((props) => (
  <InputBase {...props}/>
),{
  shouldForwardProp:isPropValid
})(({theme,padding}) => ({
  height:"48px",
  width:"100%",
  border:"2px solid rgb(229, 232, 235)",
  borderRadius:10,
  padding:padding,
  fontFamily:'Poppins,"sans-serif"'
  
}))