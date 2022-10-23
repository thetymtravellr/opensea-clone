import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import React from 'react';
import { AvatarStyled, DrawerHeaderStyled } from './style';

const DrawerHeader = () => {
  return (
    <DrawerHeaderStyled>
        <AvatarStyled>
            <AccountCircleIcon sx={{ height: '100%', width: '100%', color: 'rgb(53,56,64)'}}/>
        </AvatarStyled>
        <Typography variant='h4'>My wallet</Typography>
    </DrawerHeaderStyled>
  )
}

export default DrawerHeader