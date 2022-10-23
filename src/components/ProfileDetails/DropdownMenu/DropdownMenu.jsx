import { Divider, MenuItem } from "@mui/material";
import { StyledMenu } from "./style";
import FlagSharpIcon from '@mui/icons-material/FlagSharp';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import EtherscanIcon from "../../../assets/svg/icon-etherscan.svg"
import LanguageIcon from '@mui/icons-material/Language';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import FlagIcon from '@mui/icons-material/Flag';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function DropdownMenu({anchorEl,open,handleClose,shareDropDown,optionDropdown,id}) {
  const isDesktop = useMediaQuery('(min-width:992px)');

  return (
    <div>
      <StyledMenu
        id={`${id}-menu`}
        MenuListProps={{
          'aria-labelledby': `${id}-menu-button`,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {/* <MenuItem onClick={handleClose} disableRipple>
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          More
        </MenuItem> */}
        {shareDropDown && <ShareDropdownItems onClick={handleClose} disableRipple/>}
        {optionDropdown && (isDesktop ?<DesktopDropdownItems onClick={handleClose} disableRipple/> : <MobileDropdownItems onClick={handleClose} disableRipple/>)}
        {/* {optionDropdown && <DesktopDropdownItems onClick={handleClose} disableRipple/>} */}
        
      </StyledMenu>
    </div>
  );
}


export const DesktopDropdownItems= ({...rest}) => {
  return(
    <MenuItem >
      <FlagSharpIcon/>
        Report
    </MenuItem>
  )
}
export const MobileDropdownItems= ({...rest}) => {
  return(
    <>
      <MenuItem className="border title">
         Links
      </MenuItem>
      <MenuItem className="border">
        <EtherscanIcon/>
        View on Etherscan
      </MenuItem>
      <MenuItem className="border">
      <LanguageIcon/>
        Website
      </MenuItem>
      <MenuItem className="border">
        <TwitterIcon/>
          <div>
              <span>Archive</span>
              <span className="subtext">Ownership Varified</span>
          </div>
      </MenuItem>
      <MenuItem className="border title">
         MORE
      </MenuItem>
      <MenuItem className="border">
        <StarBorderRoundedIcon/>
         Add to Watchlist
      </MenuItem>
      <MenuItem className="border">
      <FlagIcon/>
         Report
      </MenuItem>
      {/* <Divider sx={{ my: 0.5 }} /> */}
    </>
  )
}

export const ShareDropdownItems = ({})=> {
  return(
    <>
      <MenuItem className="border">
        <FileCopyIcon/>
          Copy Link
      </MenuItem>
      <MenuItem className="border">
        <FacebookSharpIcon/>
          Share on Facebook
      </MenuItem>
      <MenuItem className="border">
        <TwitterIcon/>
          Archive
      </MenuItem>
      {/* <Divider sx={{ my: 0.5 }} /> */}
    </>
  )
}
// onClick={handleClose} disableRipple