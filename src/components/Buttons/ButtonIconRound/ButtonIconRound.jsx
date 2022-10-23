import { StyledIcon, TooltipStyled } from "./style";

export default function ButtonIconRound({tooltip,className,children,...rest}){
  const classes = className + " icon-round-button"
  if(tooltip){
    return(
      <TooltipStyled arrow placement="top" title={tooltip}>
      <StyledIcon {...rest} className={classes}>
        {children}
      </StyledIcon>
    </TooltipStyled>
    )
  }else{
  return(
      <StyledIcon {...rest} className={classes}>
        {children}
      </StyledIcon>)
  }
}