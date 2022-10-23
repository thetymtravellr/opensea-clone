import { SearchStyle, SearchIconWrapper, StyledInputBase } from "./style"
import SearchIcon from '@mui/icons-material/Search';


export default function HeaderSearch(){
    return(
        <SearchStyle>
            <StyledInputBase
              placeholder="Search items, collections, and accounts"
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
        </SearchStyle>
    )
} 


