import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const ModalStyled = styled("div",{
  shouldForwardProp: isPropValid
})(({theme})=>{
  console.log(theme)
  return(`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom: 50px;
  margin-top: 107.6px;
  max-height: 100%;
  outline: 0!important;
  >div{
      display: flex;
      flex-direction: column;
      position: relative;
      border-radius: 16px;
      background: ${theme.palette.mode =="light"?"rgb(255, 255, 255)":"rgb(38, 43, 47)"};
      width: 550px;
      max-height: calc(100vh - 0px);
      max-width: calc(100% - 32px);
    }
  ` )
})


ModalStyled.Head = styled.div`
padding: 16px;
position:relative;
text-align:center;
@media (min-width:575px){
  padding: 16px 0;
  margin:0 24px;
}
h3{
  font-weight:600;
  color:${({theme}) => theme.palette.black}
}
svg{
  position:absolute;
  right:0;
  top: 50%;
  color: rgb(138, 147, 155);
  transform: translateY(-50%);
}
`
ModalStyled.Body = styled.div`
  padding: 16px;
  height: 100%;
  overflow-y: auto;
  @media (min-width:575px){
    padding: 24px;
  }

`



export default ModalStyled