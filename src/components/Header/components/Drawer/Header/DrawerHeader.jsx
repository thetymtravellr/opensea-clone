import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import { AvatarStyled, DrawerHeaderStyled } from './style';

const DrawerHeader = () => {
  return (
    <DrawerHeaderStyled>
        <AvatarStyled>
            <AccountCircleIcon sx={{ height: '100%', width: '100%', }}/>
        </AvatarStyled>
        <Typography variant='base'>My wallet</Typography>
    </DrawerHeaderStyled>
  )
}

export default DrawerHeader