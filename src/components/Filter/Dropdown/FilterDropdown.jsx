import * as React from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, ClickAwayListener, useMediaQuery } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import { Listbox, ListStyled } from './style';

const data = [
  'Recently listed',
  'Recently created',
  'Recently sold',
  'Recently received',
  'Ending soon',
  'Price low to high',
  'Price high to low',
  'Highest last sale',
  'Most viewed',
  'Most favorited',
  'Oldest'
];

export default function FilterDropdown({ labelProps, dropdownProps, options = data, listText, index = 1, ...rest }) {
  const matches = useMediaQuery('(min-width:992px)');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(index);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuclick = () => {
    setAnchorEl(!open)
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box position="relative" {...rest}>
        <ListStyled
          component="nav"
          aria-label="Device settings"
          sx={{ bgcolor: 'background.paper' }}
          onClick={handleMenuclick}
          {...labelProps}
          spacing={matches ? false : "12px"}
        >
          <ListItem
            button
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
            className="dropdown-label"
          >
            {
              listText ? <ListItemText primary={listText} /> : <ListItemText primary={options[selectedIndex]} />
            }
            <KeyboardArrowDownIcon fontSize={matches ? "12px": "16px"}/>
          </ListItem>
        </ListStyled>
        <Listbox
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          ariaLabelledby='lock-button'
          className="dropdown-menu"
          {...dropdownProps}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Listbox>
      </Box>
    </ClickAwayListener>
  );
}
