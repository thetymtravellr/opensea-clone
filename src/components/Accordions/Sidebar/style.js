import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';

const AccordionStyled = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  padding: "0px 0px 0 0",
  background: theme.palette.background.default,
  fontSize: "16px",
  margin: "0 -10px",
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  
  '& .MuiAccordionSummary-root': {
    padding: "0px 10px",
    borderRadius: "10px",
    height: "48px"
  },
  '& .MuiAccordionDetails-root': {
    border: 0,
    padding: 0,
    
  }
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: '1.5rem' }} />}
    {...props}
  />
))(({ theme }) => ({
 
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
    background: theme.palette.background.default,
    
  },
  // '&.Mui-expanded': {
  //   background: "red"
  // },
  '& .MuiAccordionSummary-root': {
    background: 'red'
  },
  '& .MuiAccordionSummary-content': {
    fontSize: "16px",
    padding: 0,
    border: 0,
  },
  '& .MuiTypography-body1': {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginRight: "12px",

    '& .length': {
      fontWeight: "400",
      fontSize: "14px",
      color: "rgb(112, 122, 131)",
    }
  }
}));
AccordionSummary.defaultProps = { disableGutters: true }

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.border.dark}`,
}));

export const AccordionTitle = styled(Typography, {
  shouldForwardProp: isPropValid
})`
color: ${p => p.theme.palette.black};
display:flex;
font-size:16px;
align-items:center;
width: 100%
  svg{
    font-size:24px;
    margin-right:13px;
  }
`
export default AccordionStyled;