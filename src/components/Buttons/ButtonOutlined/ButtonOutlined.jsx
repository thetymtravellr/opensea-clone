import { ButtonStyled } from "./style";

export default function ButtonOutlined ({children, ...props}){
  return(
    <ButtonStyled {...props}>
        {children}
    </ButtonStyled>
  )
}