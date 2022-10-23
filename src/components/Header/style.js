import isPropValid from '@emotion/is-prop-valid';
import styled from "@emotion/styled";
import { AppBar } from "@mui/material";
import { isDarkMode } from '~utils/getThemeMode';

export const HeaderStyle = styled(AppBar, {
    shouldForwardProp: isPropValid,
})(({ theme, matches, active, bg, textColor, shadow }) => (`
background: ${bg ? theme.palette.background.default : "transparent"};
color: ${!textColor ? theme.palette.black : textColor};
box-shadow: ${shadow ? 'box-shadow: rgb(47 63 78 / 25%) 0px 0px 10px 0px' : 'none'} ;
transition:.4s;

.header-search {
    @media screen and (min-width: 767px){
        ${!bg && `
        background: ${isDarkMode(theme) ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.7)"};
        border: 2px solid transparent;
        &:hover{
            background: ${isDarkMode(theme) ? "rgba(32, 34, 37, 0.5)" : "rgba(255, 255, 255)"};
        }
    ` }
    }
}

${active && `
    background: ${theme.palette.background.default};
    box-shadow:${theme.palette.mode === "light" ? "rgb(229 232 235)" : "rgb(53 56 64)"} 0px 1px 0px 0px;
    @media screen and (min-width: 767px){
        .header-search{
            border:2px solid ${theme.palette.border.dark};
            background:transparent;
            &:hover{
                background:transparent;
            }
        }
    }
`}
`))

HeaderStyle.defaultProps = {
    // The props to change the default for.
    maxWidth: false,
    disableGutters: true
}

export const HeaderLogoStyle = styled.div`
padding-right: 48px;
`

export const HeaderInnerStyle = styled.div`
    display:flex;
    align-items:center;
`

export const HeaderSearchStyle = styled.div`
    width: 100%;
`
export const NewHeader = styled.div`
height: 70px;
display: flex;

padding: 0 20px;
.header-inner {
    width: 100%;
    justify-content: space-between;
}
.social-icons {
    align-item: center;
    
    svg {
        width: 30px !important;
        height: 16px !important;
        fill: ${p => p.theme.palette.black};
    }
}
`

export const NewHeaderLink = styled.div`
display: flex;
align-items: center;

div {
    padding: 0 15px 0 0;

    img {
        width: 30px;
        @media screen and (min-width: 992px){
            width: 40px;
        }
    }

    svg {
        width: 100px;
        height: 40px;

        @media screen and (min-width: 992px){
            width: 130px;
            height: 65px;
        }
    }
}

.MuiTypography-root {
    padding-left: 10px;
    color: ${p => p.theme.palette.black};
    font-weight: 300;
    border-left: 1px solid ${p => p.theme.palette.border.dark};
    font-size: 16px;

    @media screen and (min-width: 992px){
        padding-left: 15x;
        font-size: 24px;
    }
}
`

export const HeaderContents = styled.ul`
display: flex;
list-style: none;

li {
    
    padding: 10px 15px;

    a {
    color: ${p => p.theme.palette.black};
    transition: color 200ms ease 0s;
    font-weight: 600;
    }
}
`