import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState } from 'react';
import { CollectionMenuButton, CollectionMenuItem, CollectionMenuStyled } from './style';

const CollectionMenu = ({ active }) => {
  const menu = ['24h', '7d', '30d', 'All'];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }; 
  const [activeMenu, setActiveMenu] = useState(menu[0]);
  return (
    <div>
      <CollectionMenuButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        menu={true}
        disabled={active === 'trending'}
      >
        {activeMenu}<KeyboardArrowDownIcon />
      </CollectionMenuButton>
      <CollectionMenuStyled
        MenuProps={{ disableScrollLock: true }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          menu.map((el, i) => <CollectionMenuItem key="" onClick={() => {
            setActiveMenu(el)
            handleClose()
          }}>{el}</CollectionMenuItem>)
        }
      </CollectionMenuStyled>
    </div>
  )
}

export default CollectionMenu
