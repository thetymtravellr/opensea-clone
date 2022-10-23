import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

export const MenuStyle = styled(Stack)(({theme}) => (`
    list-style:none;
    display:flex;
    align-items:center;
`)) 

export const MenuItemStyle = styled("li")((theme)=>(
    `   
        color: rgb(4, 17, 29);
        display: flex;
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
        }
        ul{
            list-style:none;
            position:absolute;
            top:100%;
            left:0;
            background:#fff;
            min-width:220px;
            box-shadow: 0px 4px 16px rgb(0 0 0 / 16%);
            overflow-y:auto;
            pointer-events:none;
            opacity:0;
            transition:.4s opacity;
            border-radius:10px;
            li{
                a{
                    padding:16px;
                }
                &:not(:last-child){
                    border-bottom: 1px solid rgb(229,232,235);
                }
            }
        }
        &:hover{

            ul{
                pointer-events:visible;
                opacity:1;
            }
            button{
                background: none
            }
        }
        
    `
))

export const MenuDrawerButtonStyle = styled(Button)`
color: rgb(4, 17, 29);
height: 100%;
font-size:32px;
padding: 0;
`

export const MenuDropdownStyle = styled.ul``

export const MenuDropdownItemStyle = styled.li``
