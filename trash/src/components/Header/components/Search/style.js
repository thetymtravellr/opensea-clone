import styled from "@emotion/styled";
import { alpha, InputBase } from "@mui/material";

export const SearchStyle = styled('div')(({ theme }) => (`
    line-height: 26px;
    transition: background-color 0.2s cubic-bezier(0.05, 0, 0.2, 1) 0s, border-color 0.2s cubic-bezier(0.05, 0, 0.2, 1) 0s;
    cursor: text;
    display: flex;
    align-items: center;
    color: rgb(4, 17, 29);
    width: 100%;
    font-size: 16px;
    margin-right:4px;
    justify-content: flex-end;
    @media(min-width:768px){
        margin-right:30px;
        border-color: transparent;
        background-color: ${alpha(theme.palette.common.white,.7)};
        border-radius: 12px;
        padding: 0px 12px  0 45px;
        height: 48px;
        position:relative;
        top:0;
        left:0;
        border:2px solid transparent;
        justify-content: start;
    }
`));
SearchStyle.defaultProps = {className : "search-input"}
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
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    position:absolute;
    left:0;
    top:0;
    height:100%;
    background-color: ${alpha(theme.palette.common.white,1)};
    padding: 10px 20px;
    display:none;
   }
    .MuiInputBase-input{
        color: inherit;
        width:100%;
    }
`));


