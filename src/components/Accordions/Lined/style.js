import styled from "@emotion/styled";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography } from "@mui/material";
import isPropValid from "@emotion/is-prop-valid";


const AccordionStyled = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.border.dark}`,
  borderRadius:0,
  backgroundColor:
    theme.palette.mode === 'light'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgb(38, 43, 47)',
  borderRadius:"10px",
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));


export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: '1.5rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    margin:0,
    paddingTop:"20px",
    paddingBottom:"20px",
    paddingLeft:"4px",
  },
}));
AccordionSummary.defaultProps={ disableGutters :true}

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.border.dark}`,
}));

export const AccordionTitle = styled(Typography,{
  shouldForwardProp:isPropValid
})`
display:flex;
font-size:16px;
align-items:center;
  svg{
    font-size:24px;
    margin-right:13px;
  }
`
export default AccordionStyled;

