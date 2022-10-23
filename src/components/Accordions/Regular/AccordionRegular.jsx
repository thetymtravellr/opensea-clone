import AccordionStyled, { AccordionDetails, AccordionSummary, AccordionTitle } from "./style";

export default function AccordionRegular({ head, text, alwaysOpen,dp, disableTitle = false, ...props }) {
  return (
    <AccordionStyled {...props}>
      <AccordionSummary alwaysOpen={alwaysOpen}>
        {disableTitle
          ?  head 
          : <AccordionTitle fontWeight={"600"}>{head}</AccordionTitle>}
      </AccordionSummary>
      <AccordionDetails dp={dp}>
        {text}
      </AccordionDetails>
    </AccordionStyled>
  )
}
