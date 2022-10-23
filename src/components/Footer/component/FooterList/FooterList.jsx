import { Children } from "react";
import { ListStyled,ListStyledItem,ListStyledLinks } from "./style";

export default function FooterList ({data}){
  return(
    <ListStyled>
       {
          Children.toArray(
            data?.map(el => <ListStyledItem>
            <ListStyledLinks href={el.link}>{el.value}</ListStyledLinks>
          </ListStyledItem>)
           )
      }
    </ListStyled>
  )
}