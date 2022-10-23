import styled from "@emotion/styled";
import { alpha, InputBase } from "@mui/material";

export const SearchStyle = styled('div')(({ theme, borderColor, borderWidth }) => (`
    line-height: 26px;
    transition: background-color 0.2s cubic-bezier(0.05, 0, 0.2, 1) 0s, border-color 0.2s cubic-bezier(0.05, 0, 0.2, 1) 0s;
    cursor: text;
    display: flex;
    align-items: center;
    color: ${theme.palette.black};
    width: 100%;
    font-size: 16px;
    margin-right:4px;
    justify-content: flex-end;
    @media(min-width:768px){
        margin-right:30px;
        // border: none;
        // border-color: ${theme.palette.border.main};
        background-color: ${theme.palette.background.default};
        border-radius: 12px;
        padding: 0px 12px  0 45px;
        height: 48px;
        position:relative;
        top:0;
        left:0;
        // border:2px solid ${theme.palette.border.dark};
        justify-content: start;
    }
`));

SearchStyle.defaultProps = { className: "search-input" }
export const SearchIconWrapper = styled('div')(({ theme }) => (`
justify-content:flex-end;
padding-top: 6px;
@media(min-width:768px){
    position:absolute;
    left:0;
    top:0;
    height:100%;
    width:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top: 0px;
}

svg{
    font-size:34px;
    path{
        fill:color: rgb(4, 17, 29);
    }
    @media(min-width:768px){
        font-size:24px;
        path{
            fill:${theme.palette.gray.main};
        }
    }
}

`));

export const StyledInputBase = styled(InputBase)(({ theme }) => (`
    width:100%;
   @media (max-width:767px){
    border: 2px solid red;
    position:absolute;
    left:0;
    top:0;
    height:100%;
    background-color: ${alpha(theme.palette.common.white, 1)};
    padding: 10px 20px;
    display:none;
   }
    .MuiInputBase-input{
        color: inherit;
        font-weight: 400;
        width:100%;
        font-size: 16px;
    }
`));

export const MobileSearchBoxStyled = styled.div`
background: ${p => p.theme.palette.background.default};
padding: 10px 0;
width: 100%;
display: flex;
align-items: center;
min-height: 72px;

.MuiButtonBase-root {
    color: rgb(112,112,131)
}


input {
    width: 100%;
    border: none;
    font-size: 16px;
    color: rgb(4, 17, 29);
    outline: none;
}


`

export const MainIconBox = styled.div`
.MuiButtonBase-root {
    padding-left: 0;
    padding-right: 16px;

    svg {
        height: 32px;
        width: 32px;
    }
}
`

export const CLoseBtnBox = styled.div`
width: 40px;
height: 40px;

.MuiButtonBase-root {
    svg {
        height: 24px;
        width: 24px;
    }
}
`