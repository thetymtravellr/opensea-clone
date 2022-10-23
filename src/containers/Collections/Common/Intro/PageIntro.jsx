import { Typography } from "@mui/material"
import { SectionIntro } from "./style"

const PageIntro = ({title,text,textComp}) => {
  return(
    <SectionIntro>
      <Typography variant="2xl" as={"h1"}>
          {title}
      </Typography>
      {textComp ? textComp : <Typography variant="base" as={"p"}>
          {text}
      </Typography>}
      
  </SectionIntro>
   )
}

export default PageIntro