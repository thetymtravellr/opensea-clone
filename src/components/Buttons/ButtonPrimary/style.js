import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { shouldForwardProp } from "@mui/styled-engine";

export const ButtonStyled = styled("button",{
shouldForwardProp : isPropValid
})(({theme,width})=>(
  `
  display: inline-flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 12px;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.01em;
  padding: 17px 24px;
  background-color: ${theme.palette.primary.main};
  border: 2px solid rgb(229, 232, 235);
  color: #fff;
  width: ${width ? width:"auto"};
  white-space: nowrap;
  cursor:pointer;
  margin-top:12px
`
))