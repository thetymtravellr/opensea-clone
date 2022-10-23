import { ButtonStyled } from "./style";

export default function ButtonPrimary ({children,...props}){
  return(
    <ButtonStyled {...props}>
        {children}
    </ButtonStyled>
  )
}