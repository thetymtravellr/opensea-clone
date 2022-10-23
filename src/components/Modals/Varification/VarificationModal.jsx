import {Typography,Modal } from "@mui/material";
import ModalStyled from "./style";
import CloseIcon from '@mui/icons-material/Close';
import AccordionRegular from "../../Accordions/Regular";
import VerifiedIcon from '@mui/icons-material/Verified';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import Link from "../../Link";
import { useState } from "react";
import { Box } from "@mui/system";
import styled from "@emotion/styled";


const StyledVarifyIcon = styled(VerifiedIcon)`
  color:${({theme}) => theme.palette.primary.main};
`
const StyledReportIcon = styled(ReportGmailerrorredIcon)`
  color:rgb(246, 192, 0);
`
const StyledCloseIcon = styled(CloseIcon)`
  color:rgb(246, 192, 0);
  cursor:pointer;
`

export default function VarificationModal({handleClose,...props}){
  const [expanded, setExpanded] = useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return(
    <Modal sx={{ overflow:"auto" }} {...props}>
        <ModalStyled>
        <div>
          <ModalStyled.Head>
            <Typography variant="xs" component="h3">What does this mean?</Typography> 
            <StyledCloseIcon onClick={handleClose}/> 
          </ModalStyled.Head>
          <ModalStyled.Body>
            <Box mb="23px">
              <AccordionRegular head={<><StyledVarifyIcon/>Badged Collection</>}
                text={<>This collection belongs to a verified account and has significant interest or sales. <Link>Learn more</Link></>}
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
              />
            </Box>
            <Box>
              <AccordionRegular head={<><StyledReportIcon/>Mintable Collection</>}
                text={<>Mintable collections allow users to create their own digital items, which could include duplicate or fake versions of items from other projects. You should always do your own research, proceed with caution, and be certain that the smart contract address of the project is exactly what you expect.</>}
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
              />
            </Box>
          </ModalStyled.Body>
        </div>
      </ModalStyled>
    </Modal>
  )
}

