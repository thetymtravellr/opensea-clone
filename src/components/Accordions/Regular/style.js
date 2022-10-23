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
  border: `1px solid ${theme.palette.border.dark}`,
  backgroundColor:
    theme.palette.mode === 'light'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgb(38, 43, 47)',
  borderRadius: "10px",
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },

}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={!props.alwaysOpen && <ExpandMoreIcon sx={{ fontSize: '1.5rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    margin: 0,
    padding: "20px 0 20px 4px",
  },
}));
AccordionSummary.defaultProps = { disableGutters: true }

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.border.dark}`,
}));

export const AccordionTitle = styled(Typography, {
  shouldForwardProp: isPropValid
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