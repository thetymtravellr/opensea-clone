import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";

export const PricingFilterStyled = styled("div",{
  shouldForwardProp:isPropValid
})(({mt,mb})=>(`
margin-top: ${mt ? mt : ""};
margin-bottom: ${mb ? mb : ""};
display:flex;
align-items:center;
&>*{
  margin-right:8px;
}
.input:last-of-type{
  margin-right:0;
}
input{
  text-align:center;
}
.dropdown .MuiList-root,.input{
  width:112px;
}
.input{
  width:102px
}
.dropdown,.input{
  display:flex;
}
.dropdown .dropdown-label{
  padding-right: 12px;
  padding-left: 14px;
}
`))