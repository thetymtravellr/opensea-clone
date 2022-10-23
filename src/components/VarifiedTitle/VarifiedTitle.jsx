import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import VerifiedIcon from '@mui/icons-material/Verified';
import { Typography } from "@mui/material";
import React from "react";
import Link from "../Link";
import VarificationModal from "../Modals/Varification/VarificationModal";
import { TitleWrapper, TooltipStyled } from "./style";

const StyledVarifyIcon = styled(VerifiedIcon,{
  shouldForwardProp: isPropValid
})`
  color:${({theme}) => theme.palette.primary.main};
  ${({cursor}) => cursor && "cursor:pointer"};
`
export default function VarifiedTitle({title,titleProps,variant,modalDisable,tooltipContent,disableTooltip=false,iconProps,children,...rest}){

  const [modal, setModal] = React.useState(false);
  const handleModalOpen = () => setModal(true);
  const handleModalClose = () => setModal(false);
  return(
    <>
     
      <TitleWrapper {...rest}>
        <Typography {...titleProps} variant={variant} fontWeight="600">{title || children}</Typography>
        {!disableTooltip ? <>
        <TooltipStyled arrow placement="right" title={tooltipContent ? tooltipContent : <TooltipContent onClick={handleModalOpen}/>}>
            <StyledVarifyIcon onClick={!modalDisable && handleModalOpen} {...iconProps} cursor={!disableTooltip}/>
      </TooltipStyled>
      {!modalDisable && <VarificationModal
        open={modal}
        onClose={handleModalClose}
        handleClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      />}
      </>:<StyledVarifyIcon onClick={handleModalOpen} {...iconProps} cursor={!disableTooltip}/>}
      
      
      </TitleWrapper>
      
    </>
  )
  
}

const TooltipContent = ({...props}) => {
  return(
    <Typography variant="4xs" component="p" {...props}>This collection belongs to a verified <br/> account and has significant interest or  <br/> sales. <Link> Learn More</Link></Typography>
  )
}

