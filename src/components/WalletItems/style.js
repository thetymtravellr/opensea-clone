import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { Button, Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import theme from "../../theme";

const chipType = {
    popular: {
        bg: "rgb(32, 129, 226)",
        color: "white"
    },
    solana: {
        bg: "rgb(229, 232, 235)",
        color: "rgb(112, 122, 131)"
    }
}

export const ListWrapper = styled.div`
padding: 20px;
`

export const ListStyled = styled(List)(({ theme }) => ({
    borderRadius: '10px',
   
    padding: "0",
    backgroundColor: theme.palette.mode === "light" ? "rgb(255,255,255)" : "rgb(32,34,37)",
    border: `1px solid ${theme.palette.mode === "light" ? "rgb(229, 232, 235)" : "rgb(53, 56, 64)"}`,
    margin: "0",
}))

export const ListItemStyled = styled(ListItem)(({ theme, mobile }) => ({
    width: '100%',
    borderBottom: `1px solid ${theme.palette.mode === "light" ? "rgb(229,232,235)" : "rgb(53, 56, 64)"}`,
    padding: '0',
    fontSize: '14px',
    fontWeight: 700,
    cursor: !mobile && 'Pointer',
    background: 'transparent',
    [`&:hover`]: {
        transition: 'all 0.2s ease 0s',
        boxShadow: !mobile && 'rgb(4,17,29,.25) 0px 0px 8px 0px',
        backgroundColor: theme.palette.mode === "light" ? "rgb(255,255,255)" : "rgb(38,43,47)",
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
    borderRadius: '10px',
    fontFamily: 'poppins',
}))

export const BreakPointText = styled('p')`
font-weight: 400;
`

export const ListButton = styled(Button, {
    shouldForwardProp: isPropValid
})(({ theme }) => (`
width: 100%;
padding: 20px;
border-top-right-radius: 0;
border-top-left-radius: 0;
border: 1px solid ${p => p.theme.mode === "light" ? "red" : "blue"}
`))