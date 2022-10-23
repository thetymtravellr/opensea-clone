import styled from "@emotion/styled"
import { Pagination, PaginationItem } from "@mui/material";
import { background } from "~containers/AllNft/data";

// const PaginationStyled = styled(({ className, ...props }) => (
//   <Pagination {...props} classes={{ popper: className }} />
// ))(({ theme }) => {
//   return(
//     {
//       backgroundColor: "red",
//       ["button"]:{
//         backgroundColor: "#fff",
//         color: "#707A83",
//         boxShadow: "0px 0px 0px 0px #f5f5f5",
//         borderRadius: "5px",
//         fontWeight: "500",
//         ["&.Mui-selected"]:{
//           backgroundColor: "red"
//         }
//       }
      
//     }
//   )
// })
// export const PaginationItemStyled = styled(({ className, ...props }) => (
//   <>
//   <PaginationItem {...props} classes={{ popper: className }} />
//   {console.log(className)}
//   </>
// ))(({ theme }) => {
//   return(
//       `
//       background:red;
//       `
//   )
// })
// {
//   backgroundColor: "red",
//   ["button"]:{
//     backgroundColor: "#fff",
//     color: "#707A83",
//     boxShadow: "0px 0px 0px 0px #f5f5f5",
//     borderRadius: "5px",
//     fontWeight: "500",
//     ["&.Mui-selected"]:{
//       backgroundColor: "red"
//     }
//   }
  
// }
const PaginationStyled = styled.div`
margin-top:16px;
  .MuiPaginationItem-root{
    border-radius:5px;
    padding:.6rem 1rem .5rem;
    height:auto;
    background:#fff;
    color: #707A83;
    box-shadow: 0px 0px 0px 0px #f5f5f5;
    &.Mui-selected{
      background:rgb(32, 129, 226);
      color:#fff;
    }
    &.Mui-disabled{
      display:none;
    }
    &:not(&.Mui-selected):hover{
      color: #04111D;
      background:#fff;
    }
    &:hover{
      box-shadow: rgb(47 63 78 / 15%) 0px 0px 10px 0px;
    }
  }
`


export default PaginationStyled;