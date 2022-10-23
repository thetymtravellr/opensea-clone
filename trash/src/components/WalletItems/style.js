import styled from "@emotion/styled";
import { Button, Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import theme from "../../theme";

const chipType = {
    popular: {
        bg: theme.palette.primary.main,
        color: theme.palette.common.white
    },
    solana: {
        bg: theme.palette.gray.light,
        color: theme.palette.gray.main
    }
}

export const ListStyled = styled(List)(({ theme }) => ({
    padding: '20px'
}))

export const ListItemStyled = styled(ListItem)(({ theme, mobile }) => ({
    width: '100%',
    border: `1px solid ${theme.palette.gray.light}`,
    padding: '0',
    fontSize: '14px',
    fontWeight: 700,
    cursor: !mobile && 'Pointer',
    [`&:hover`]: {
        transition: 'all 0.2s ease 0s',
        boxShadow: !mobile && 'rgb(4,17,29,.25) 0px 0px 8px 0px',
        backgroundColor: 'rgb(251, 253, 255)',
    },
    [`&:first-child`]: {
        borderTopRightRadius: '12px',
        borderTopLeftRadius: '12px',
    },
    opacity: (mobile) ? '.25' : '1',
}))

export const WalletBox = styled(Box)(({ theme, mobile }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '16px',
    fontSize: '14px',
   
}));

export const WalletItemRight = styled.div`
display: flex;
align-items: center;
`

export const WalletAvatar = styled(Avatar)`
width: 24px;
height: 24px;
margin-right: 12px;
`

export const WalletChip = styled(Chip)(({ theme, type }) => ({
    background: chipType[type?.toLowerCase()]?.bg || "transparent",
    color: chipType[type?.toLowerCase()]?.color,
    fontWeight: 400,
    borderRadius: '10px'
}))

export const BreakPointText = styled('p')`
font-weight: 400;
`

export const ListButton = styled(Button)(({ theme }) => (`
width: 100%;
padding: 20px;
border-top-right-radius: 0;
border-top-left-radius: 0;
border: 1px solid ${theme.palette.gray.light}
`))