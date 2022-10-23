
import { Container, useScrollTrigger } from "@mui/material";
import { Box } from "@mui/system";
// import ProfileCard from "../../components/Cards/Profile/ProfileCard";
// import FilterList from "../../components/FilterList/FilterList";
// import VarifiedTitle from "../../components/VarifiedTitle";
// import { filters } from "./data";
import FilterHead from "~components/Filter/Head/all/FilterHead";
import FilterList from "~components/FilterList";
import FilterLayout from "~containers/Layouts/FilterLayout";
import FilterBody from "~containers/Layouts/FilterLayout/FilterBody";

import { filters } from "./data";
import Sidebar from "./Sidebar";
import { CollectionStyled } from "./style";
export default function CollectionDetailsContent(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <CollectionStyled >
      <Container>
        <Box>
          <FilterList listArray={filters} />
        </Box>
      </Container>
      <FilterLayout head={<FilterHead className={`${trigger ? "scroll" :null}`} filterIcon={true} searchBar={true} dropdown={true} view={true}/>} sidebar={<Sidebar />} >
        {/* <FilterItems /> */}
        <FilterBody/>
      </FilterLayout>
    </CollectionStyled>
  )
}
// const Sidebar = () => {
//   return (<>
//     <AccordionSidebar head={"Status"}
//       content={<>
//         <Checkbox label="Buy Now" />
//         <Checkbox label="On Auction" />
//       </>}
//     />
//     <AccordionSidebar head={"Status"}
//       content={<>
//         <PricingFilter />
//       </>}
//     />

//   </>)
// }
