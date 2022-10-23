import isPropValid from '@emotion/is-prop-valid';
import styled from "@emotion/styled";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

// export const BadgeStyled = styled.div`
//   width:${p=>p.size || "20px"};
//   height:${p=>p.size || "20px"};
//   pointer-events:none;
//   svg{
//     pointer-events:none;
//   }
// `

// export const TooltipStyled = styled(({ className, ...props }) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => {
//   console.log(tooltipClasses)
//   return({
//     [`& .${tooltipClasses.tooltip}`]: {
//       backgroundColor: '#f5f5f9',
//       color: 'rgba(0, 0, 0, 0.87)',
//       maxWidth: 220,
//       fontSize: theme.typography.pxToRem(12),
//       border: '1px solid #dadde9',
//     },
//     [`.${tooltipClasses.popperArrow}`]:{
//       color: '#f5f5f9',
//     }
//   })});
// export const TooltipStyled = styled(({ className, ...props }) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => {
//   return(`
//     .MuiTooltip-tooltip: {
//       backgroundColor: #f5f5f9';
//       color: rgba(0, 0, 0, 0.87);
//       maxWidth: 220;
//       fontSize: theme.typography.pxToRem(12);
//       border: '1px solid #dadde9';
//     },
//     .${tooltipClasses.popperArrow}:{
//       color: '#f5f5f9',
//     }
//   `)});
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
      width:"315px",
      paddingTop:"0",
      paddingBottom:"0",
      paddingLeft:"0",
      paddingRight:"0",
      borderRadius:"10px",
      cursor:"pointer"
    },
    [`p`]: {
      paddingTop:"15px",
      paddingBottom:"15px",
      paddingLeft:"15px",
      paddingRight:"15px",
      ['a']:{
        color:theme.palette.primary.main
      }
    },
    
  })});


export const TitleWrapper = styled("div",{
	shouldForwardProp: isPropValid,
})`
  display:flex;
  align-items:center;
  margin-left:${({ml}) => ml};
  color: ${p => p.theme.palette.black};
  svg{
    margin-left:${({iconSpacing}) => iconSpacing ?iconSpacing : "10px"  };
    width:${({iconSize})=> iconSize || "20px"};
    height:${({iconSize})=> iconSize || "20px"};
    path{
      pointer-events:none;
    }
  }
`