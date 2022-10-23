
import { Container } from "@mui/material";
import { Box } from "@mui/system";
// import ProfileCard from "../../components/Cards/Profile/ProfileCard";
// import FilterList from "../../components/FilterList/FilterList";
// import VarifiedTitle from "../../components/VarifiedTitle";
// import { filters } from "./data";
import FilterHead from "~components/Filter/Head/collction/FilterHead";
import FilterList from "~components/FilterList";
import FilterLayout from "~containers/Layouts/FilterLayout";
import FilterBody from "~containers/Layouts/FilterLayout/FilterBody";

import { filters } from "./data";
import Sidebar from "./Sidebar";
import { CollectionStyled } from "./style";
export default function CollectionDetailsContent() {

  return (
    <CollectionStyled>
      <Container>
        <Box mt="20px">
          <FilterList listArray={filters} />
        </Box>
      </Container>
      <FilterLayout head={<FilterHead filterIcon={true} searchBar={true} dropdown={true} view={true} offer={true}/>} sidebar={<Sidebar />} >
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
