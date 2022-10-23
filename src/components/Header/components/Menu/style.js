import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { Box, Button, Switch } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "~components/Link";

export const MenuStyle = styled(Stack, {
    shouldForwardProp: isPropValid
})(({ theme }) => (`
    list-style:none;
    display:flex;
    align-items:center;
    height: 80px;
`))

export const MenuItemStyle = styled("li")(({theme, left, right}) => (
    `   
        color: ;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0px 10px;
        position: relative;
        width: 100%;
        font-weight:600;
        @media (min-width:600px){
            padding: 0px 14px;
        }
        .menu-item-icon{
            font-size:32px;
            display:flex;
            align-items: center;
        }
        a{
            color:inherit;
            text-decoration:none;
            display: flex;
        }
        ul:not(.social-icons) {
            position:absolute;
        }

        ul {
            list-style:none;
            top:100%;
            background: ${theme.palette.headerDropdown};
            min-width:220px;
            box-shadow: 0px 4px 16px rgb(0 0 0 / 16%);
            overflow-y:auto;
            pointer-events:none;
            opacity:0;
            transition:.4s opacity;
            border-radius:10px;
            li{
                a:not(.social-links) {
                    padding:16px;
                    color: ${theme.palette.black};
                }
                &:not(:last-child){
                    border-bottom: 1px solid ${theme.palette.border.dark};
                }
                &:hover {
                    transition: all 0.2s ease 0s;
                    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
                    background-color: ${theme.palette.mode === "light" ? "rgb(255,255,255)" : "rgb(38, 43, 47)"};
                }
            }
        }
        &:hover{

            ul {
                pointer-events:visible;
                opacity:1;
            }
            button{
                background: none
            }
        }
        
    `
))

export const MenuDrawerButtonStyle = styled(Button, {
    shouldForwardProp: isPropValid
})`
color: ${p => p.theme.palette.black};
height: 100%;
font-size:32px;
padding: 0;

`

export const IconMenuDropdownStyle = styled(Box)(({ theme, gap }) => (`

ul:not(.social-icons) {
    position:absolute;
}

ul {
    list-style:none;
    top:100%;
    background: ${theme.palette.headerDropdown};
    min-width:220px;
    box-shadow: 0px 4px 16px rgb(0 0 0 / 16%);
    overflow-y:auto;
    pointer-events:none;
    opacity:0;
    transition:.4s opacity;
    border-radius:10px;
    li{

        a, button {
            padding:16px;
            color: ${theme.palette.black};
        }
        &:not(:last-child){
            border-bottom: 1px solid ${theme.palette.border.dark};
        }
        &:hover {
            transition: all 0.2s ease 0s;
            box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
            background-color: ${theme.palette.mode === "light" ? "rgb(255,255,255)" : "rgb(38, 43, 47)"};
        }
    }
}

&:hover{
    ul {
        pointer-events:visible;
        opacity:1;
    }
    button{
        background: none
    }
}

`))

export const MenuDropdownStyle = styled("ul")(({ theme, left, right }) => (`
max-height: calc(100vh - 72px);
left: ${left ? left : "unset"};
right: ${right ? right : "unset"};
`))

export const MenuDropdownItemStyle = styled.li``

export const LinkStyled = styled(Link)`
display: flex;
align-items: center;
`

export const LinkImage = styled(Box)`
width: 24px;
height: 24px;
margin-right: 12px;
img {
    width: 24px;
}
`

export const MenuSocialStyle = styled.ul`
display: flex;
justify-content: center;
list-style: none;
li {
    a {
        padding: 16px 4px;
    }
    &:hover {
        background-color: transparent!important;
        box-shadow:none!important;
    }
}
`

export const DropdownButtonStyled = styled(Button)(({ theme, gap }) => (`

min-width: 250px;
    display: flex;
    justify-content: space-between;
    gap: 0 ${gap ? gap : "0"};

    .MuiBox-root {
        display: flex;
        align-items: center;
        gap: 0 6px;
    }

`))

export const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 48,
    height: 24,
    padding: 0,
    margin: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 3,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(24px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgb(24, 104, 183)' : 'rgb(24, 104, 183)',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 18,
        height: 18,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? 'rgb(76, 80, 92)' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

