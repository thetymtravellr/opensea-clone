import styled from "@emotion/styled";
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
export const RadioStyled = styled((props) => (
  <FormControlLabel control={<Radio />} {...props}/>
))(({ theme }) => ({
  display:"flex",
  justifyContent:"space-between",
  padding:"12px 10px",
  marginLeft:"0",
  borderRadius:"10px",
  marginRight:0,
  "&:hover":{
    background:"rgba(229, 232, 235, 0.2)"
  },
  ".MuiRadio-root":{
    paddingLeft:0,
    paddingTop:0,
    paddingBottom:0,
    order:2,
    "&:not(.Mui-checked)":{
      color:"rgb(217 219 221)",
      "svg":{
      }
    },
    "&.Mui-checked":{
      color:"rgb(32, 129, 226)"
    },
    "svg":{
      fontSize:"26px"
    }
  },
  ".MuiFormControlLabel-label":{
    fontWeight: 400, 
    fontSize: "16px", 
    color: theme.palette.black,
    order:1
  }
}))