import styled from "@emotion/styled";
import { Tooltip, tooltipClasses } from "@mui/material";

export const StyledIcon = styled.div`
  background: ${p => p.theme.palette.background.default};
  color: ${p => p.theme.palette.black};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 12px;
  border: none;
  border-radius: 500px;
  font-size:20px;
  cursor:pointer;
  &:hover{
    box-shadow:rgb(0 0 0 / 10%) 0px 2px 10px;
  }
`

export const TooltipStyled = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => {
  return({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.mode ==="light" ?"black":"rgb(38, 43, 47)" ,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.mode ==="light" ?"black":"rgb(38, 43, 47)",
      textAlign:"center",
      paddingTop:"12px",
      paddingBottom:"12px",
      paddingLeft:"20px",
      paddingRight:"20px",
      borderRadius:"10px",
      fontSize:"14px",
      cursor:"pointer",
      [`.sub`]:{
        display:"block",
        fontWeight: 600,
        fontSize: "inherit",
        marginTop:"3px",
        color: "rgb(112, 122, 131)"
      }
    }
    
  })});