import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const ButtonStyled = styled(Typography,{
  shouldForwardProp:isPropValid
})`
  display:flex;
  align-items:center;
  cursor:pointer;
  transition:.4s;
  color: ${p => p.theme.palette.black};
svg{
  ${({expanded}) => expanded ? "transform:rotate(180deg)" : "transform:rotate(0deg)"}
}
&:hover{
  color:rgba(53, 56, 64, 0.8);
}
`

const TextStyled = styled(Typography)(({color,theme}) => (`
width:inherit;
color: ${theme.palette.black};
line-height:1.8;
`))

Typography.defaultProps = {
  fontFamily:"inherit"
}

const Wrapper = styled(Box,{
  shouldForwardProp:isPropValid
})``

export default function TextTrunacate({textProps,text,children,variant,...rest}){
  const [show,setShowmore] = useState(false)
  return(
    <Wrapper {...rest}>
      <TextStyled  variant={variant} noWrap={show?  false : true} {...textProps} className="text">
          {children}    
      </TextStyled>
      <ButtonStyled variant={variant} component="span" onClick={() => setShowmore(!show)} expanded={show}>Show {!show? "More":"Less"} <KeyboardArrowDownIcon/></ButtonStyled>
    </Wrapper>
  )
}