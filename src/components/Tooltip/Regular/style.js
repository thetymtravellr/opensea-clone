import styled from "@emotion/styled";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
export const TooltipStyled = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => {
    return({
      [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.mode ==="light" ?"rgb(4,17,29)":"rgb(76, 80, 92)" ,
      },
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.mode ==="light" ?"rgb(4,17,29)":"rgb(76, 80, 92)",
        textAlign:"center",
        paddingTop:"12px",
        paddingBottom:"12px",
        paddingLeft:"20px",
        paddingRight:"20px",
        borderRadius:"10px",
        cursor:"pointer"
      },
      
    })});

    