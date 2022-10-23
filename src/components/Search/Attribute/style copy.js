import styled from "@emotion/styled";
import { Autocomplete } from "@mui/material";

export const StyledMenu = styled((props) => (
  <Autocomplete
    selectOnFocus
    clearOnBlur
    handleHomeEndKeys
    {...props}
  />
))(({ theme }) => (`
  .MuiAutocomplete-option: {
    background: red
  }
`))

// max-height: 350px;
// overflow-y: auto;
// box-shadow: rgb(0 0 0 / 16%) 0px 4px 16px;
// background-color: rgb(255, 255, 255);
// color: rgb(4, 17, 29);
// min-width: 220px;
// overflow-y: auto;
//     box-shadow: rgb(0 0 0 / 16%) 0px 4px 16px;
//     background-color: rgb(255, 255, 255);
//     color: rgb(4, 17, 29);