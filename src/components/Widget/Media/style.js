import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Widget = styled("div")(()=>(`
text-align:center;
@media (min-width:480px){
  text-align:left;
    display: flex;  
  }
`))

Widget.Icon = styled.div`
  
  min-height: 80px;
  max-height: 80px;
  min-width: 80px;
  max-width: 80px;
  background-color: rgb(243, 251, 254);
  color: rgb(32, 129, 226);
  border-radius: 10px;
  font-size: 32px !important;
  display: inline-flex;
  align-items:center;
  justify-content:center;
  margin-bottom: 20px;
  @media (min-width:480px){
    margin-right: 30px;
  }
  @media (min-width: 1024px){
      margin-left: 30px;
  }
  svg{
    font-size:inherit;
  }
  `
  Widget.Body = styled.div``


  Widget.Title = styled(Typography)(({theme}) => {
    return(
      `
      margin-bottom:18px;
      color:${theme.palette.heading};
    `
    )
  })
Widget.Text = styled(Typography)(({theme}) => {
  return(
    `
    // font-weight: 400;
    // font-size: 16px;
    color:${theme.palette.text.default};
  `
  )
})

export default Widget