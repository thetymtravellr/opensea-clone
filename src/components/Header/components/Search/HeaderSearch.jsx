import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material';
import { SearchIconWrapper, SearchStyle, StyledInputBase } from "./style";

export default function HeaderSearch({ placeholder, borderColor, borderWidth, search, toggleMobileSearch, ...rest }) {
  const matches = useMediaQuery('(min-width:767px)');
  
  return (
    <SearchStyle borderColor={borderColor} borderWidth={borderWidth} {...rest}>
      <StyledInputBase
        placeholder={placeholder || "Search items, collections, and accounts"}
        inputProps={{ 'aria-label': 'search' }}
      />
      <SearchIconWrapper onClick={() => {
        toggleMobileSearch(true)
      }}>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchStyle>
  )
}
