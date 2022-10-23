import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { Box, Button, Stack } from "@mui/material";

export const MobileMenuContainer = styled.div`
min-height: calc(100vh - 56px);
height: fit-content;
padding-top: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
background: ${p => p.theme.palette.background.default};

.wallet-btn {
    width: 100%;
    border: none;
}
`

export const MenuStyle = styled(Stack, {
    shouldForwardProp: isPropValid
})(({ theme }) => (`
    list-style:none;
    display:flex;
    align-items:center;
    justify-content: space-between;
  

    li {
        width: 100%;
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
        display: flex;
        height: 72px;
        -webkit-box-pack: justify;
        justify-content: space-between;
        font-weight: 600;
        font-size: 16px;
        flex-shrink: 0;
        padding: 0px 10px;
        color: ${p => p.theme.palette.black};

        svg {
            width: 32px;
            height: 32px;
        }
    }
`))

export const MenuBody = styled.div`

`

export const MenuItemStyle = styled("li")(({ theme, left, right }) => (``))

export const MenuItemStyled = styled(Button)`

-webkit-box-align: center;
    align-items: center;
    justify-content: flex-start;
    color: ${p => p.theme.palette.black};
    display: flex;
    height: 100%;
    position: relative;
    width: 100%;
    padding: 0;
    min-width: 64px;

    span:not(.submenu-label):first-of-type {
        font-size: 32px;
        margin-right: 8px;
    }

    .chevron {
        margin-left: auto;
        font-size: 24px;
    }
`

export const WalletButtonContainer = styled.div`
width: 100%;
padding: 0 20px;
button {
    
}
`

export const ExploreMenuStyled = styled.div``
export const SubMenuStyled = styled.div``

export const LinkImage = styled(Box)`
width: 24px;
height: 24px;
margin-right: 12px;
img {
    width: 24px;
}
`

export const MenuFooterStyled = styled("div")(({ theme }) => (`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0;

`))

export const FooterSocialSection = styled.div`
width: 100%;
margin: 20px 0 0;
border-top: 1px solid rgb(235, 237, 240);
ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
}
`

