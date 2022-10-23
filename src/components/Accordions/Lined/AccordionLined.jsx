import Link from "../../Link";
import AccordionStyled, { AccordionDetails, AccordionSummary, AccordionTitle } from "./style";

export default function AccordionLined({head,text,...props}){
  return(
    <AccordionStyled {...props}>
      <AccordionSummary><AccordionTitle fontWeight={"600"}>{head}</AccordionTitle></AccordionSummary>
      <AccordionDetails>
        {text}
      </AccordionDetails>
    </AccordionStyled>
  )
}
