import { Pagination } from "@mui/material";
import PaginationStyled from "./style";
const Arrow = () => {
  return <>prev</>;
};

const PaginationCustom = ({props}) => {
  return(
    <PaginationStyled {...props}>
    <Pagination
  count={10}
  // className="header"
  // renderItem={(item) => (
  //   <PaginationItem
  //     components={{ previous: <Arrow/>, last: <Arrow/> }}
  //     {...item}
  //   />
  // )}
/>
</PaginationStyled>
   )
}

export default PaginationCustom