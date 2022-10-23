import styled from "@emotion/styled";
import { Avatar } from "@mui/material";
import Box from "@mui/system/Box";

export const DrawerHeaderStyled = styled(Box)(({ theme }) => ({
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    borderTop: `1px solid ${theme.palette.gray.light}`,
}))

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
    height: '30px',
    width: '30px',
    background: 'none',
    marginRight: '8px',
}))