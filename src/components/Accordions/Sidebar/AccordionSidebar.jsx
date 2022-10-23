import { Box } from "@mui/material"
import { useState } from "react"
import HeaderSearch from "~components/Header/components/Search/HeaderSearch"
import AccordionStyled, { AccordionDetails, AccordionSummary, AccordionTitle } from "./style"

const AccordionSidebar = ({ content, head, length, search }) => {
  const [status, setStatus] = useState(false)
  const handleChange = () => {
    setStatus(!status)
  }
  return (
    <AccordionStyled expanded={status}
      onChange={handleChange}>
      <AccordionSummary>
        <AccordionTitle fontWeight={"600"}>
          {/* <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between"}}>
            
          </Box> */}
          <span>{head}</span>
          {length && <span className="length">{length}</span>}
        </AccordionTitle>
      </AccordionSummary>
      <AccordionDetails>

        {search && <Box sx={{ margin: "10px 0"}}>
          <HeaderSearch placeholder="Search" borderColor="rgb(229, 232, 235)" />
        </Box>}
        {content}

      </AccordionDetails>
    </AccordionStyled>
  )
}

export default AccordionSidebar