import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Widget = styled("div")(()=>(`
text-align:center;
display: flex;
flex-direction: column;
align-items: center;
padding: 8px;
@media (min-width:575px){
   max-width:346px;
   margin-left:auto;
   margin-right:auto;
}
`))

Widget.Icon = styled.div`
  max-width:44px;
  min-width:44px;
  font-size:44px;
  margin-bottom:7px;
  svg{
    font-size:inherit;
  }
  `
  Widget.Title = styled(Typography)`
    margin-bottom:18px;
`
Widget.Text = styled(Typography)`
  // font-weight: 400;
  // font-size: 16px;
  color: rgb(53, 56, 64);
`

export default Widget