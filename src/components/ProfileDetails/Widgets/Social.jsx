import React from 'react';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ButtonIconRound from "../../Buttons/ButtonIconRound";
import { ProfileSocialStyled } from '../style';
import DropdownMenu from '../DropdownMenu';
export default function ProfileTitleWidgets({children,desktop}){

  const [optionAnchorEl, setOptionAnchorEl] = React.useState(null);
  const [shareAnchorEl, setShareAnchorEl] = React.useState(null);
  const optionOpen = Boolean(optionAnchorEl);
  const shareOpen = Boolean(shareAnchorEl);
  const handleOptionClick = (event) => {
    setOptionAnchorEl(event.currentTarget);
  };
  const handleShareClick = (event) => {
    setShareAnchorEl(event.currentTarget);
  };
  const handleShareClose = () => {
    setShareAnchorEl(null);
  };
  const handleOptionClose = () => {
    setOptionAnchorEl(null);
  };
  return(
    <ProfileSocialStyled>
    {children}
    {desktop && <ButtonIconRound tooltip={"Add to watchlist"}>
      <StarBorderRoundedIcon/>
    </ButtonIconRound>}
    
    <ButtonIconRound tooltip={"Share"}
      id="share-menu-button"
      aria-controls={shareOpen ? 'share-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={shareOpen ? 'true' : undefined}
      disableElevation
      onClick={handleShareClick}
    >
      <ShareRoundedIcon/>
    </ButtonIconRound>
    <DropdownMenu anchorEl={shareAnchorEl} open={shareOpen} handleClose={handleShareClose} shareDropDown id="share"/>
    <ButtonIconRound id="option-menu-button"
        aria-controls={optionOpen ? 'option-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={optionOpen ? 'true' : undefined}
        disableElevation
        onClick={handleOptionClick}>
      <MoreHorizRoundedIcon/>
    </ButtonIconRound>
      <DropdownMenu id={"option"} anchorEl={optionAnchorEl} open={optionOpen} handleClose={handleOptionClose} optionDropdown/>
</ProfileSocialStyled>
  )
}